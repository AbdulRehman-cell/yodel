(function(){try{function kill(){try{document.body.classList.remove('loading-state','loading','is-loading','preload','no-js');document.documentElement.classList.remove('loading-state','loading','is-loading','preload','no-js');document.querySelectorAll('#preloader,.preloader,#pre-loader,.pre-loader,#loading-overlay,.loading-overlay,#loading-screen,.loading-screen,.site-preloader,.page-preloader').forEach(function(n){n.style.display='none';n.style.opacity='0';n.style.visibility='hidden';n.style.pointerEvents='none';setTimeout(function(){try{n.remove()}catch(e){}},50);});}catch(e){}}kill();document.addEventListener('DOMContentLoaded',kill);window.addEventListener('load',function(){kill();setTimeout(kill,300);setTimeout(kill,1500);});}catch(e){}})();
(function(){try{
    var conventions=[
      {sel:'.scroll-reveal',add:'is-visible'},
      {sel:'.reveal',add:'active'},
      {sel:'.fade-in',add:'visible'},
      {sel:'.slide-in',add:'visible'},
      {sel:'.animate-on-scroll',add:'animated'},
      {sel:'.animate-on-load',add:'in-view'},
      {sel:'[data-aos]',add:'aos-animate'},
      {sel:'[data-reveal]',add:'in-view'},
      {sel:'[data-scroll]',add:'is-inview'},
      {sel:'[data-animate]',add:'is-visible'},
      {sel:'.animate:not(.animated)',add:'animated'},
      {sel:'.will-animate',add:'animated'},
      {sel:'.fade-up',add:'is-visible'},
      {sel:'.fade-down',add:'is-visible'},
      {sel:'.zoom-in',add:'is-visible'}
    ];
    function makeVisible(el,cls){el.classList.add(cls);el.style.opacity='';el.style.visibility='';el.style.transform='';}
    if(!('IntersectionObserver' in window)){
      conventions.forEach(function(c){document.querySelectorAll(c.sel).forEach(function(el){makeVisible(el,c.add);});});
      return;
    }
    conventions.forEach(function(c){
      var els=document.querySelectorAll(c.sel);
      if(!els.length)return;
      var io=new IntersectionObserver(function(entries){
        entries.forEach(function(e){if(e.isIntersecting){makeVisible(e.target,c.add);io.unobserve(e.target);}});
      },{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
      els.forEach(function(el){io.observe(el);});
    });
    setTimeout(function(){
      conventions.forEach(function(c){document.querySelectorAll(c.sel).forEach(function(el){makeVisible(el,c.add);});});
    },2500);
    var deliberateHideSel='dropdown,submenu,sub-menu,mega-menu,tooltip,popover,modal,dialog,overlay,cookie,consent,preloader,pre-loader,loading,offscreen,collapsed,accordion-content,tab-panel,tab-content';
    function isDeliberatelyHidden(el){
      var e=el;while(e && e.classList){
        for(var i=0;i<e.classList.length;i++){var c=e.classList[i].toLowerCase();
          if(deliberateHideSel.split(',').some(function(k){return c.indexOf(k)!==-1;}))return true;
        }
        if(e.hasAttribute && (e.hasAttribute('hidden')||e.getAttribute('aria-hidden')==='true'||e.getAttribute('role')==='dialog'||e.getAttribute('role')==='menu'||e.getAttribute('role')==='tooltip'))return true;
        e=e.parentElement;
      }
      return false;
    }
    setTimeout(function(){
      var containers=document.querySelectorAll('section,main,article,[class*="section"],[class*="Section"]');
      containers.forEach(function(c){
        c.querySelectorAll('*').forEach(function(el){
          if(!el.isConnected||isDeliberatelyHidden(el))return;
          try{
            var cs=getComputedStyle(el);
            if(cs.opacity==='0'||cs.visibility==='hidden'){
              el.style.setProperty('opacity','1','important');
              el.style.setProperty('visibility','visible','important');
              el.style.setProperty('transform','none','important');
              el.style.setProperty('animation','none','important');
            }
          }catch(e){}
        });
      });
    },3500);
  }catch(e){}})();

document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => { preloader.style.display = 'none'; }, 600);
        }, 1200);
    }
    const header = document.querySelector('.site-header');
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 20) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
    const revealElements = document.querySelectorAll('.hero-content-wrapper, .work-card, .project-card, .service-card, .step, .review-card, .contact-grid, .cta-card, .cta-box');
    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
        revealElements.forEach(el => { el.classList.add('reveal-init'); revealObserver.observe(el); });
    } else {
        revealElements.forEach(el => el.classList.add('revealed'));
    }
    const terminalBody = document.querySelector('.terminal-body code');
    if (terminalBody) {
        const codeLines = ['const developer = {', '  name: "Abdus Salam",', '  role: "Full-Stack MERN Freelancer",', '  shipReady: () => "High performance. Pure MERN. No bloat."', '};'];
        terminalBody.textContent = '';
        let lineIdx = 0, charIdx = 0;
        function typeCode() {
            if (lineIdx < codeLines.length) {
                if (charIdx < codeLines[lineIdx].length) {
                    terminalBody.textContent += codeLines[lineIdx].charAt(charIdx++);
                    setTimeout(typeCode, 20);
                } else {
                    terminalBody.textContent += '\n';
                    lineIdx++; charIdx = 0;
                    setTimeout(typeCode, 150);
                }
            } else {
                terminalBody.innerHTML += '<span class="terminal-cursor">█</span>';
            }
        }
        setTimeout(typeCode, 1500);
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });
});

(function(){
  function enhance(){
    var navs = document.querySelectorAll('header nav, .site-header nav, .navbar nav, header .nav-links');
    for (var i = 0; i < navs.length; i++) {
      var nav = navs[i], header = nav.closest('header, .site-header, .navbar, .main-header') || nav.parentElement;
      if (!header || header.querySelector('.nav-toggle')) continue;
      var btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'nav-toggle'; btn.innerHTML = '<span></span><span></span><span></span>';
      btn.addEventListener('click', function(){ nav.classList.toggle('nav-open'); });
      (nav.parentElement || header).appendChild(btn);
    }
  }
  if (document.readyState !== 'loading') enhance(); else document.addEventListener('DOMContentLoaded', enhance);
})();