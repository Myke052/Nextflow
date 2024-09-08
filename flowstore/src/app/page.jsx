'use client'

import Image from "next/image"
import styles from "./page.module.css"

export default function Home() {
  return (
    <header className="cabecera">
      <Image 
      src="/Delivery.png"
      width={50}
      height={50}
      alt="Logo" 
      className="head"/>
      <p className="oneWord">Envios a todo el pais
        <p className="secondWord">
          Oferta excusiva
        </p>
      </p>
    </header>
  )
}
