import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Menu, X, ArrowUpRight, Scissors, Shirt, Ruler, Sparkles, MapPin, Phone, MessageCircle, Instagram, ChevronRight, ChevronLeft, Clock3, Check, Images, Store, Send } from 'lucide-react';
import './style.css';

const PHONE = '919304102020'; // WhatsApp international format for 9304102020
const MAP_URL = 'https://maps.app.goo.gl/4ww3saHXHrvuP1MA8';
const waLink = (message='Hello Naaz Tailors & Cloth, I would like to know more about your services.') => `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

const gallery = [
  {src:'/images/shop-front.jpg', title:'Our Storefront', type:'Shop'},
  {src:'/images/shop-interior-wide.jpg', title:'Inside Naaz', type:'Shop'},
  {src:'/images/fabric-shelves.jpg', title:'Fabric Collection', type:'Fabrics'},
  {src:'/images/plain-fabrics.jpg', title:'Colourful Fabrics', type:'Fabrics'},
  {src:'/images/printed-fabrics.jpg', title:'Printed Fabrics', type:'Fabrics'},
  {src:'/images/tailoring-work.jpg', title:'Craftsmanship at Work', type:'Tailoring'},
  {src:'/images/tailor-at-work.jpg', title:'Made with Care', type:'Tailoring'},
  {src:'/images/shop-opening.jpg', title:'A Moment from Our Journey', type:'Shop'},
];

function App(){
  const [menuOpen,setMenuOpen]=useState(false);
  const [filter,setFilter]=useState('All');
  const [lightbox,setLightbox]=useState(null);
  const [form,setForm]=useState({name:'',phone:'',service:'Blazer / Bandi stitching',message:''});
  const shown=useMemo(()=>filter==='All'?gallery:gallery.filter(x=>x.type===filter),[filter]);
  const nav=[['Home','#home'],['About','#about'],['Collections','#collections'],['Tailoring','#services'],['Gallery','#gallery'],['Contact','#contact']];
  const sendEnquiry=(e)=>{e.preventDefault(); const msg=`Hello Naaz Tailors & Cloth!\nName: ${form.name}\nPhone: ${form.phone}\nEnquiry: ${form.service}\nDetails: ${form.message}`; window.open(waLink(msg),'_blank','noopener,noreferrer');};
  const go=(href)=>{setMenuOpen(false);document.querySelector(href)?.scrollIntoView({behavior:'smooth'});};
  const changePhoto=(dir)=>{const idx=gallery.findIndex(x=>x.src===lightbox.src);setLightbox(gallery[(idx+dir+gallery.length)%gallery.length]);};
  return <>
    <div className="topline"><span>TAILORING • SUITING • SHIRTING • FABRICS</span><a href={waLink('Hello, I am contacting you from your website.')} target="_blank" rel="noreferrer"><MessageCircle size={14}/> WhatsApp: 9304102020</a></div>
    <header className="header">
      <a className="brand" href="#home" onClick={()=>setMenuOpen(false)} aria-label="Naaz home"><span className="brand-mark">N</span><span><b>NAAZ</b><small>TAILORS & CLOTH</small></span></a>
      <nav className={menuOpen?'nav open':'nav'}>{nav.map(([label,href])=><a key={href} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}<a className="nav-cta" href={waLink()} target="_blank" rel="noreferrer">Enquire Now <ArrowUpRight size={15}/></a></nav>
      <button className="menu-btn" aria-label="Toggle navigation" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <main>
      <section className="hero" id="home">
        <img className="hero-img" src="/images/shop-front.jpg" alt="Naaz Tailors and Cloth storefront" />
        <div className="hero-shade"></div>
        <div className="hero-content"><span className="eyebrow light">A LOCAL NAME IN STYLE & CRAFT</span><h1>Elegance in<br/><em>Every Stitch.</em></h1><p>From fine fabrics to thoughtful tailoring, discover craftsmanship made around you.</p><div className="hero-actions"><a className="btn btn-gold" href="#collections">Explore Our World <ArrowUpRight size={17}/></a><a className="btn btn-outline" href={waLink()} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Talk to Us</a></div><div className="hero-note"><span className="note-line"></span> BLAZER · BANDI · SCHOOL DRESS · SUITING & SHIRTING</div></div>
        <div className="hero-stamp"><span>EST.</span><b>NAAZ</b><small>TAILORS & CLOTH</small></div>
      </section>

      <section className="intro section" id="about"><div className="intro-photo"><img src="/images/shop-interior-wide.jpg" alt="Inside Naaz Tailors and Cloth"/><div className="photo-tag"><span>THE NAAZ EXPERIENCE</span><b>Crafted with care.<br/>Chosen with confidence.</b></div></div><div className="intro-copy"><span className="eyebrow">WELCOME TO NAAZ</span><h2>Good fabric.<br/><em>Great fitting.</em><br/>A style of your own.</h2><p>Naaz Tailors & Cloth brings fabrics and tailoring together under one roof. Whether you are choosing material for a special occasion, getting a blazer stitched or arranging school uniforms, our focus is on quality, fit and personal attention.</p><p className="muted">Visit our store to explore the collection and discuss your tailoring requirements.</p><a className="text-link" href="#contact">Discover Naaz <ArrowUpRight size={16}/></a></div></section>

      <section className="promise"><div><span className="promise-icon"><Scissors/></span><b>Expert Tailoring</b><small>Attention to every detail</small></div><div><span className="promise-icon"><Shirt/></span><b>Fabric Selection</b><small>Choices for every occasion</small></div><div><span className="promise-icon"><Ruler/></span><b>Personal Fitting</b><small>Made to your measurements</small></div><div><span className="promise-icon"><Sparkles/></span><b>Everyday to Occasion</b><small>Styles for every moment</small></div></section>

      <section className="collections section" id="collections"><div className="section-heading"><div><span className="eyebrow">FIND YOUR STYLE</span><h2>Explore our <em>collections</em></h2></div><p>From classic suiting to everyday fabrics, find inspiration for your next look.</p></div><div className="collection-grid">
        <a className="collection-card large" href="#gallery" onClick={()=>setFilter('Fabrics')}><img src="/images/fabric-shelves.jpg" alt="Fabric collection at Naaz"/><span className="collection-overlay"><small>01 / FABRICS</small><b>Fabrics & Suiting</b><i>Explore fabrics <ArrowUpRight size={16}/></i></span></a>
        <a className="collection-card" href="#services"><img src="/images/tailoring-work.jpg" alt="Tailoring service"/><span className="collection-overlay"><small>02 / CRAFT</small><b>Blazer & Bandi</b><i>Discover tailoring <ArrowUpRight size={16}/></i></span></a>
        <a className="collection-card" href="#services"><img src="/images/shop-opening.jpg" alt="Naaz shop and clothing"/><span className="collection-overlay"><small>03 / SCHOOL</small><b>School Uniforms</b><i>Know more <ArrowUpRight size={16}/></i></span></a>
      </div><div className="audience-line"><span>STYLE FOR</span><b>MEN</b><i>✦</i><b>WOMEN</b><i>✦</i><b>KIDS</b></div></section>

      <section className="services section" id="services"><div className="services-image"><img src="/images/tailor-at-work.jpg" alt="Tailor working on a garment"/><div className="vertical-label">MADE WITH PRECISION</div></div><div className="services-copy"><span className="eyebrow">THE ART OF FIT</span><h2>Tailoring that feels<br/><em>made for you.</em></h2><p>Our tailoring services bring your style and our craftsmanship together. Talk to us about your requirements and visit the store for measurements and fabric selection.</p><div className="service-list"><div><span>01</span><b>Blazer & Bandi Stitching</b><ChevronRight/></div><div><span>02</span><b>School Uniform & Dress</b><ChevronRight/></div><div><span>03</span><b>Suiting & Shirting</b><ChevronRight/></div><div><span>04</span><b>Custom Stitching & Alterations</b><ChevronRight/></div></div><a className="btn btn-dark" href={waLink('Hello Naaz Tailors & Cloth, I would like to enquire about tailoring services.')} target="_blank" rel="noreferrer">Discuss Your Requirement <ArrowUpRight size={17}/></a></div></section>

      <section className="gallery-section section" id="gallery"><div className="section-heading"><div><span className="eyebrow">A CLOSER LOOK</span><h2>Inside the <em>Naaz world</em></h2></div><p>A glimpse of our store, fabrics and the work that goes into every stitch.</p></div><div className="filters">{['All','Shop','Fabrics','Tailoring'].map(x=><button className={filter===x?'active':''} key={x} onClick={()=>setFilter(x)}>{x}</button>)}</div><div className="gallery-grid">{shown.map((item,i)=><button className={`gallery-item item-${i%4}`} key={item.src} onClick={()=>setLightbox(item)}><img src={item.src} alt={item.title}/><span><small>{item.type}</small><b>{item.title}</b><ArrowUpRight size={17}/></span></button>)}</div></section>

      <section className="visit section" id="contact"><div className="visit-copy"><span className="eyebrow light">WE WOULD LOVE TO MEET YOU</span><h2>Come by.<br/><em>Let's create your style.</em></h2><p>Visit Naaz Tailors & Cloth for fabric selection, tailoring discussions and personal assistance.</p><div className="contact-details"><a href="tel:+919304102020"><Phone/> <span><small>CALL US</small><b>9304102020</b></span></a><a href={MAP_URL} target="_blank" rel="noreferrer"><MapPin/> <span><small>FIND OUR STORE</small><b>Get directions on Google Maps</b></span></a></div><a className="btn btn-gold" href={waLink()} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp Us</a></div><div className="enquiry-card"><span className="eyebrow">GET IN TOUCH</span><h3>Send an enquiry</h3><p>Tell us what you are looking for. We'll help you with the next step.</p><form onSubmit={sendEnquiry}><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Enter your name"/></label><label>Mobile number<input required type="tel" pattern="[0-9+() -]{8,16}" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Your contact number"/></label><label>I'm interested in<select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option>Blazer / Bandi stitching</option><option>School uniform</option><option>Suiting / Shirting fabric</option><option>Other tailoring</option><option>General enquiry</option></select></label><label>Message<textarea rows="3" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Share a few details (optional)"/></label><button className="btn btn-dark full" type="submit">Send via WhatsApp <Send size={16}/></button><small className="form-note">Your enquiry opens in WhatsApp for you to send.</small></form></div></section>
    </main>

    <footer className="footer"><div className="footer-main"><div className="footer-brand"><a className="brand brand-light" href="#home"><span className="brand-mark">N</span><span><b>NAAZ</b><small>TAILORS & CLOTH</small></span></a><p>Thoughtful fabrics and expert tailoring, all under one roof.</p></div><div><h4>EXPLORE</h4><a href="#about">About Naaz</a><a href="#collections">Collections</a><a href="#services">Tailoring Services</a><a href="#gallery">Gallery</a></div><div><h4>GET IN TOUCH</h4><a href="tel:+919304102020">9304102020</a><a href={MAP_URL} target="_blank" rel="noreferrer">Shop location</a><a href={waLink()} target="_blank" rel="noreferrer">WhatsApp enquiry</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Naaz Tailors & Cloth. All rights reserved.</span><span>Made with care <span className="heart">♥</span></span></div></footer>
    <a className="floating-wa" href={waLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle/><span>Chat with us</span></a>
    {lightbox&&<div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.title} onClick={()=>setLightbox(null)}><button className="light-close" onClick={()=>setLightbox(null)} aria-label="Close"><X/></button><button className="light-prev" onClick={e=>{e.stopPropagation();changePhoto(-1)}} aria-label="Previous"><ChevronLeft/></button><img src={lightbox.src} alt={lightbox.title} onClick={e=>e.stopPropagation()}/><button className="light-next" onClick={e=>{e.stopPropagation();changePhoto(1)}} aria-label="Next"><ChevronRight/></button><div className="light-caption">{lightbox.title} · {lightbox.type}</div></div>}
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
