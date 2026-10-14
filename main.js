const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.getElementById('f').addEventListener('submit',e=>{e.preventDefault();e.target.innerHTML='<p style="font-size:1.4rem;font-weight:600">Ďakujeme, ozveme sa Vám.</p><p style="color:#6d5d61">Ukážka formulára – v hotovej verzii chodia dopyty priamo na Váš e-mail.</p>'});
