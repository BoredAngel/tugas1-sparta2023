import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between md:p-24 md:pb-0 p-8 py-24  text-black ">

      <div id="profil" className="md:h-[85vh] md:mb-0 mb-10">
        <h2 className="text-5xl mb-6 text-[#fdc127]">Profil</h2>
        <div className="my-10  h-fit flex justify-between relative md:flex-row flex-col-reverse">
          <div className="h-fit">
            <p className="text-2xl">Muhammad Jibril Ibrahim</p>
            <p>Teknik Informatika - Ganesha</p>
            <p>19623277 | 13523085 </p>
            <p className="mt-16 mb-2 text-xl">Sedikit tentang diri saya</p>
            <p className="md:w-[500px]">Saya sedang berkuliah di Institut Teknologi Bandung (ITB). 
               Saya berjurusan di Teknik Informatika STEI-K ITB.
               Minat saya saat ini adalah Cybersecurity dan pixel art.

            </p>
          </div> 
          <div className="mb-8">
            <Image
              src="/poto.jpg"
              width={250}
              height={250}
              alt="logo"
              className="rounded-full min-h-full w-[250px] md:translate-y-[-20%] mx-auto"
            />
          </div>
        </div>  
      </div>

      <div id="pencapaian" className="md:h-[85vh] md:mb-0 mb-10">
        <h2 className="text-5xl mb-6 text-[#fdc127]">Pencapaian</h2>
        <p className="text-xl mb-4">Pencapaian yang telah saya gapai sampai saat ini</p>
        <ul>
          <li>OSN Informatika tingkat kota 2020</li>
          <li>OSN Informatika tingkat kota 2021</li>
        </ul>
        
      </div>

      <div id="projek" className="md:h-[85vh] md:mb-0 mb-10">
        <h2 className="text-5xl mb-6 text-[#fdc127]">Projek</h2>
        <div className="flex justify-between relative md:flex-row flex-col">
          <div className="mb-10">
           <p className="text-xl mb-4">Beberapa projek yang pernah saya lakukan</p>
            <ul>
              <li>Tugas besar dasar pemrograman</li>
              <li>Website Infest 2023</li>
              <li>TicTacToe bot</li>
              <li>Game platformer</li>
              <li>web E-Commerce untuk tugas PRD </li>
              <li>game clicker simpel untuk tugas GIM 2023</li>
            </ul>
          </div>
          <div className="w-fit md:translate-y-[-10%]">
            <Image
                src="/tubes daspro.png"
                width={450}
                height={200}
                alt="logo"
                className="min-h-full w-[400px]"
              />
              <p className="text-sm text-center mt-2">Tugas besar Dasar Pemrograman</p>
          </div>
        </div>
      </div>

      <div id="kemampuan" className="md:h-[85vh] md:mb-0 mb-10">
        <h2 className="text-5xl mb-6 text-[#fdc127]">Kemampuan</h2>
        <div className="flex justify-between relative md:flex-row flex-col">
          <div className="mb-10">
            <p className="text-xl mb-4">Skill-skill saya yang saya kembangkan sejauh ini</p>
            <ul>
              <li>Python</li>
              <li>C++</li>
              <li>Unity 2D & C#</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>NextJS</li>
              <li>EJS</li>
              <li>CTF - web exploitation</li>
              <li>CTF - PWN</li>
              <li>Pixel art</li>
            </ul>
          </div>
          <div className="w-fit ">
            <Image
                src="/shark.gif"
                width={450}
                height={200}
                alt="logo"
                className="w-[350px]"
              />
              <p className="text-sm text-center mt-2">Pixel animation yang saya buat</p>
          </div>
        </div>
      </div>

      <div id="kontak" className="md:h-[85vh] md:mb-0 mb-10">
        <h2 className="text-5xl mb-6 text-[#fdc127]">Kontak</h2>
        <p className="text-xl mb-4">Kontak aku kapan saja</p>
        <ul>
          <li className="text-lg mb-4"><a href="https://www.linkedin.com/in/muhammad-jibril-ibrahim-68758529a" target="_blank"> <Image className="inline" src="/Linkedin-logo.png" alt="logo linkedin" width={15} height={15}/> linkedin </a></li>
          <li className="text-lg mb-4"> <Image className="inline" src="/Whatsapp-logo.png" alt="logo WA" width={15} height={15}/> +6285795595897</li>
          <li className="text-lg mb-4"><a href="https://www.instagram.com/m_ji45/" target="_blank"> <Image className="inline" src="/Instagram-logo.png" alt="logo IG" width={15} height={15}/> m_ji45 </a></li>
          <li className="text-lg mb-4"><a href="https://github.com/BoredAngel" target="_blank"> <Image className="inline" src="/GitHub_logo.png" alt="logo Line" width={15} height={15}/> BoredAngel </a></li>
        </ul>
        
      </div>

      <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] opacity-10 -z-10">
          <Image
            src="/sparta-logo.png"
            width={200}
            height={200}
            alt="logo"
          />
        </div>
    </main>
  );
}
