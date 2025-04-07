
"use client"

import React, {useState, useEffect} from 'react'
import { Heart, ShoppingCart } from 'lucide-react';
import { useSearchParams } from 'next/navigation';



const allProducts = [
    {
        title: 'Eco-Friendly Water Bottle',
        price: 25,
        image: "https://images.unsplash.com/photo-1585083969600-495ee7e3604b?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "small",
        description: "A sustainable and reusable water bottle made from eco-friendly materials."
    },
    {
        title: 'Insulated Sports Bottle',
        price: 40,
        image: "https://images.unsplash.com/photo-1568395216634-ab1b1e848751?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
        category: "medium",
        description: "Keep your drinks cold or hot for hours with this insulated sports bottle."
    },
    {
        title: 'Glass Water Bottle',
        price: 30,
        image: "https://images.unsplash.com/photo-1566557087503-b839ce6e5aa0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
        category: "small",
        description: "A sleek and stylish glass water bottle perfect for everyday use."
    },
    {
        title: 'Stainless Steel Bottle',
        price: 45,
        image: "https://images.unsplash.com/photo-1625708458528-802ec79b1ed8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
        category: "large",
        description: "Durable and rust-resistant stainless steel bottle for long-lasting use."
    },
    {
        title: 'Collapsible Travel Bottle',
        price: 20,
        image: "https://images.unsplash.com/photo-1598443043897-4c07cdcf442b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
        category: "small",
        description: "A compact and lightweight bottle that collapses for easy storage."
    },
    {
        title: 'Kids Water Bottle',
        price: 15,
        image: "https://plus.unsplash.com/premium_photo-1676848403370-6427abdbe4b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
        category: "small",
        description: "A fun and colorful water bottle designed specifically for kids."
    },
    {
        title: 'Premium Designer Bottle',
        price: 60,
        image: "https://images.unsplash.com/photo-1599030302844-568e71a28ce1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
        category: "large",
        description: "A luxurious designer bottle that combines style and functionality."
    },
    {
        title: 'Filter-Integrated Bottle',
        price: 50,
        image: "https://plus.unsplash.com/premium_photo-1664527307281-faf42c09ac8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmVlJTIwYm90dGxlfGVufDB8fDB8fHww",
        category: "medium",
        description: "A water bottle with a built-in filter for clean and fresh drinking water."
    },
    {
        title: 'Lightweight Hiking Bottle',
        price: 35,
        image: "https://plus.unsplash.com/premium_photo-1705969351341-f34f843d7a32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
        category: "medium",
        description: "A lightweight and durable bottle designed for outdoor adventures."
    },
    {
        title: 'Thermal Coffee Bottle',
        price: 55,
        image: "https://images.unsplash.com/photo-1712007600937-3814b7f6822e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRoZXJtYWwlMjBjb2ZlZSUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
        category: "large",
        description: "A thermal bottle perfect for keeping your coffee hot on the go."
    }
]

const filterCategory = [
    {value: "small"},
    {value: "medium"},
    {value: "large"}
]

const Litre = [
    {value: "300ml"},
    {value: "500ml"},
    {value: "800ml"},
    {value: "1 litre"}
]

const ShopPage = () => {
    const searchParams = useSearchParams();
    const filteredByCategory = searchParams.get("size") || "all";

    const [products, setProducts] = useState(allProducts);
    
    useEffect(() => {
        if (filteredByCategory === "all") {
            setProducts(allProducts);
        } else {
            const filteredProducts = allProducts.filter((products) => products.category === filteredByCategory);
            
            setProducts(filteredProducts);
        }
    }, [])


    return (
        <section className='mx-5'>
        <div>
            <h1 className='text-3xl text-center font-bold'>Bottles Haven</h1>
        </div>
        {/* input section */}
        <div className='flex justify-center gap-12 items-center'>
                    <div className=' rounded-lg w-[500px] flex items-center gap-2 border border-gray-400'>
                        <label htmlFor="" className='bg-amber-600 text-white px-4 py-2 rounded-lg'>Search</label>
                        <input type="text" placeholder='Search for products' className='outline-none'/>
                    </div>
            <div>
                <label htmlFor="">Category</label>
                <select name="Category" id="category" className='border w-[200px]   py-1 '>
                    {/* <option  value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option> */}
git add                        <option key={index} value={category.value}>{category.value}</option>
                    ))}
                </select>
            </div>
            
        </div>
        <div className='grid grid-cols-3 gap-5 p-5  '>
            {products.map((product) => (
                <ProductCard key={product.description} product={product} />
        ))} 
        </div>
    </section>
  )
}   



const ProductCard = ({product}: {product: 
    {title: string, price: number, image: string, category: string, description: string}}
) => {
    const [selectedLitre, setSelectedLitre] = useState("null");

    return (
        <div className='bg-white p-4 rounded-3xl w-[350px] shadow-lg flex flex-col gap-4 justify-center items-center'>
        <div className='relative'>
            <img src={product.image} alt={product.title} className='w-[350px] h-[350px] object-cover mx-auto rounded-2xl'/>
            <button className='bg-white rounded-full p-1 absolute right-1 top-1 hover:bg-amber-600 hover:text-white transition-all duration-300'>
                <Heart size={20} />
            </button>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='font-bold text-xl'>{product.title}</h2>
            <div className='flex gap-2 '>
                {Litre.map((volume, index) => (
                    <div key={index} className=' '>
                        <button 
                        className={`border border-gray-300 text-gray-400 rounded-full px-2 py-1 text-sm ${selectedLitre === volume.value ? 'bg-amber-600 text-white' : '' }`}
                        onClick={() => setSelectedLitre(volume.value)}> 
                            {volume.value}
                        </button>  
                    </div>
                ))}
            </div>
            <p>{product.description.slice(0, 60)}...</p>
            {/* <p>Category: {product.category}</p> */}
            <div className='flex justify-between items-center'>
                <p className='font-bold text-xl'> ${product.price}</p>
                <button className='bg-amber-600 text-white px-8 py-2 rounded-full flex items-center gap-2 text-sm '>
                    <ShoppingCart size={20}/>
                    Add to Cart</button>
            </div>
        </div>
    </div>
    )
}

export default ShopPage