import Head from 'next/head'
import Image from 'next/image'


import Search from '../components/Search'
import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";

const Header :any = dynamic(() => import('./../components/Header'), { ssr: false });


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />


  


      


      <main className='grid' >
              {/* Hero Image */}

              <section className="hero border-black border-solid border-2">
               
              <div className='hero__image relative h-60 w-full'>
                  <Image

                    src="https://a0.muscache.com/im/pictures/53e51dcb-8fad-4ce8-b61c-8a7a369267bf.jpg"
                    alt="Hero Image"
                    
                    layout="fill"
                    quality={80}

                    
                    
                  />
              </div>
              </section>

              {/* About Section */}
              <p>
                Lorem ipsum,
                dolor 
                sit 
                amet 
                consectetur 
                adipisicing elit. 
                <br />
                <hr />
                Totam tempora vel sit odio 
                provident inventore quo nam nostrum ipsa officiis beatae 
                voluptas dolorum possimus non, nulla quasi, harum, quidem 
                ipsum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam laudantium enim sint expedita tempora et odio reiciendis vel eveniet. Facere adipisci nulla aspernatur aperiam! Accusamus officiis placeat ratione rem magnam qui dolore fugit itaque fuga, illo ab, harum corrupti eligendi accusantium omnis, cum molestiae quidem! Quis optio impedit nemo deleniti consequatur dolor reiciendis fugiat officiis aspernatur quasi earum ratione harum quam nihil recusandae totam commodi nisi, repudiandae aliquam eaque. Doloremque magni alias voluptate autem eveniet culpa! Quos, voluptates unde! Error ipsam voluptatibus beatae autem tempora. Quod ipsum iusto voluptates! Cumque reprehenderit consequuntur eveniet culpa accusantium eaque delectus exercitationem eius. Quis itaque ducimus quasi optio, minus fugiat reiciendis aspernatur velit quia doloremque illo possimus deleniti, repellendus necessitatibus natus eius est excepturi odio atque porro impedit eveniet! Beatae, nemo eaque? Dolorum ab vero et ipsum suscipit quae harum voluptatum alias, maiores molestias rem. Maiores cupiditate assumenda dolores distinctio eaque obcaecati, iusto maxime porro impedit minus qui mollitia sunt reiciendis eveniet ullam labore a saepe? Dolorem, voluptas. Quisquam voluptates aspernatur excepturi dolores, perspiciatis eum placeat rem et autem amet libero voluptate maiores, odit quaerat! Quae quibusdam consequatur eaque. Doloribus qui praesentium obcaecati alias repellendus velit accusantium, consectetur doloremque neque, deserunt eaque nihil!
              </p>
    
        
      </main>

      



      
    </div> 
  )
}