import React from 'react'
import './Home.css';
import Card from './Card';

function Home() {
    return (
        
        <div className='home'>
            <h1>YAYA Accesorios</h1>
            
            <div className='home_section'>
                <Card 
                     src="https://cdn1.coppel.com/images/catalog/pr/4672052-1.jpg"
                     title="Diadema"
                     description="Diadema dorada"
                     price="$250"
                />
                <Card 
                    src="https://exoticaonline.mx/17984-large_default/diadema-turbante-con-nudo-.jpg"
                    title="Diadema rosita"
                    description="Rosa"
                    price="5 mil"
                />
                <Card 
                    src="https://cdn1.coppel.com/images/catalog/pr/4022392-1.jpg"
                    title="Diadema"
                    description="Para niña"
                    price="$4000"
                />

            </div>
            <div className='home_section'>
               
                <Card 
                   
                />
                <Card 
                
                />
                <Card 
                
                />

            </div>

        </div>
    )
}

export default Home
