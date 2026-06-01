"use client"

import { useEffect, useRef, type ComponentProps } from "react"
import { useTheme } from "next-themes"
import * as THREE from "three"

import { cn } from "@/lib/utils"

type DottedSurfaceProps = Omit<ComponentProps<"div">, "ref">
export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const columns = 40
    const rows = 60
    const separation = 150
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, 1, 1, 10000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    const geometry = new THREE.BufferGeometry()
    const positions: number[] = []
    const color = resolvedTheme === "dark" ? 0.78 : 0
    scene.fog = new THREE.Fog(0xf9f6fa, 2000, 10000)
    camera.position.set(0, 355, 1220)
    renderer.setClearColor(scene.fog.color, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)
    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        positions.push(
          x * separation - (columns * separation) / 2,
          0,
          y * separation - (rows * separation) / 2
        )
      }
    }
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    )
    const material = new THREE.PointsMaterial({
      color: new THREE.Color(color, color, color),
      opacity: 0.8,
      size: 8,
      sizeAttenuation: true,
      transparent: true,
    })
    scene.add(new THREE.Points(geometry, material))
    let count = 0
    let animationId = 0
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    const render = () => {
      const values = geometry.attributes.position.array as Float32Array
      for (let index = 0; index < columns * rows; index++) {
        const x = Math.floor(index / rows)
        const y = index % rows
        values[index * 3 + 1] =
          Math.sin((x + count) * 0.3) * 50 + Math.sin((y + count) * 0.5) * 50
      }
      geometry.attributes.position.needsUpdate = true
      renderer.render(scene, camera)
      count += 0.1
      if (!reduceMotion) animationId = requestAnimationFrame(render)
    }
    const resize = () => {
      const { width, height } = container.getBoundingClientRect()
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    const observer = new ResizeObserver(resize)
    observer.observe(container)
    resize()
    render()
    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationId)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [resolvedTheme])
  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none", className)}
      {...props}
    />
  )
}
