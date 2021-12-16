import React from 'react'
export function TakeValue({handleChange,handleSubmit,items}){
    const {name,email,phone,address} = items
    return <>
    
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='name' id="name" value={name} onChange={handleChange} required></input><br/><br/>
        <input type="email" placeholder='email' id="email" value={email} onChange={handleChange} required></input><br/><br/>
        <input type="number" placeholder='phone' id="phone" value={phone} onChange={handleChange} required></input><br/><br/>
        <input type="text" placeholder='address' id="address" value={address} onChange={handleChange} required></input><br/><br/>
        <button id="button">ADD</button>
    </form>
    </>
}