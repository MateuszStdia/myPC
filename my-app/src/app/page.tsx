"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
const Home: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav className={`sticky top-1 shadow-md transition-opacity ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <ul className="flex justify-center gap-4 ">
          <li> <button onClick={() => scrollToSection('section1')} className="navButton">Introduction</button></li>
          <li><button onClick={() => scrollToSection('section2')} className="navButton">Specs</button></li>
          <li><button onClick={() => scrollToSection('section3')} className="navButton">Overview</button></li>
          <li><button onClick={() => scrollToSection('section4')} className="navButton">Contact</button></li>
        </ul>
      </nav>
      <div id="section1" className="section">
        <h1 className='text-2xl'>Welcome</h1>
        <h1 className='Overview'>This website is about my <p className='text-blue-400 text-2xl'>Personal Computer</p></h1>
        <div className='image'>
      <Image
        src="/pc.jpg"
        alt="PC Image"
        layout="responsive"
        width={200}
        height={200}
      />
    </div>

      </div>
      <div id="section2" className="section">
        <h1 className='text-4xl mb-6'>Specs</h1>
        <div className='Components grid md:grid-cols-3 gap-4 m-6'>
          <div>
            <h2>CPU</h2>
            <h3>AMD 5 5600</h3>
            <p>AMD Ryzen 5 5600 is a powerful processor known for its impressive multi-threaded performance and efficiency. It belongs to the Ryzen 5000 series, featuring Zen 3 architecture, which offers significant improvements in instructions per clock (IPC) compared to previous generations. With 6 cores and 12 threads, it's suitable for gaming, content creation, and multitasking.</p>
          </div>
          <div>
            <h2>GPU</h2>
            <h3>AMD Radeon 6700XT</h3>
            <p>AMD Radeon RX 6700 XT is a high-performance graphics card based on the RDNA 2 architecture. It offers excellent gaming performance and supports features like real-time ray tracing and variable rate shading. With its 12GB of GDDR6 memory, it's capable of delivering smooth gameplay at high resolutions and settings.</p>
          </div>
          <div>
            <h2>RAM</h2>
            <h3>2x8GB Kingston Fury RGB</h3>
            <p>Kingston Fury RGB RAM modules provide a total of 16GB of memory in dual-channel configuration. With its stylish RGB lighting and reliable performance, it enhances both the aesthetics and functionality of the system. The 16GB capacity is sufficient for gaming, productivity tasks, and multitasking.</p>
          </div>
          <div>
            <h2>PSU</h2>
            <h3>EVGA 650W Supernova 80+ Gold</h3>
            <p>EVGA 650W Supernova power supply unit (PSU) delivers reliable and efficient power to the system components. With an 80 Plus Gold certification, it ensures high efficiency and stable power delivery, reducing energy waste and heat generation. The 650W capacity is suitable for powering the CPU, GPU, and other components with headroom for future upgrades.</p>
          </div>
          <div>
            <h2>Motherboard</h2>
            <h3>ASRock B450 Pro4</h3>
            <p>ASRock B450 Pro4 is a feature-rich motherboard based on the AMD B450 chipset. It offers support for AMD Ryzen processors and features like PCIe 3.0 slots, M.2 slots, USB 3.1 Gen2 ports, and SATA III connectors. It provides a solid foundation for building a gaming or productivity-focused PC with room for expansion.</p>
          </div>
          <div>
            <h2>Case</h2>
            <h3>Phanteks P400A</h3>
            <p>Phanteks P400A is a mid-tower ATX case known for its excellent airflow and stylish design. It features a mesh front panel and multiple fan mounts to ensure optimal cooling for the system components. With its spacious interior, cable management options, and tempered glass side panel, it offers a clean and visually appealing build experience.</p>
          </div>
        </div>
        <div className='overview flex flex-col items-center max-w-4xl'>
          <h1 className='text-4xl text-green-400'>Overview</h1>
          <h1 id='section3' className='Overview'>This high-performance gaming PC offers a perfect balance of power, efficiency, and aesthetics. With its AMD Ryzen 5 5600 processor, AMD Radeon 6700XT graphics card, and 16GB of Kingston Fury RGB RAM, it's well-equipped to handle demanding gaming sessions, content creation tasks, and multitasking with ease. The EVGA 650W Supernova 80+ Gold power supply unit ensures reliable and efficient power delivery, while the ASRock B450 Pro4 motherboard provides ample connectivity options and room for expansion. Housed in the stylish Phanteks P400A case with excellent airflow and RGB lighting, this PC not only performs exceptionally but also looks great doing it. Overall, it's a top-notch gaming rig that delivers a premium computing experience for gamers and enthusiasts alike.</h1>
        </div>
      </div>
      <div id="section4" className="section">
        <h2>Contact info</h2>
        <p className='max-w-sm text-center'>If you need help with picking out parts for your Personal Computer you can contact me on..</p>
        <h3>Email: m232@gmail.com</h3>
        <h3>Phone: +01 555 555 555</h3>
      </div>
    </div>
  );
};

export default Home;