import React from 'react'
import Link from 'next/link'

export default function index() {
    return (
        <div>
            <h1>Seja Bem vindo</h1>
            <div>
                <nav>
                    {/* Exemplo de utilização de links */}
                    <Link href="/contact">
                        <a title="Produtos">Contact</a>
                    </Link>
                     |  
                    <Link href="/shop/products/category">
                        <a title="Shop">Shop</a>
                    </Link>
                </nav>
            </div>
        </div>
    )
}
