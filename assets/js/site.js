(function(){
  const toggle=document.querySelector('.mobile-toggle');
  const nav=document.querySelector('.main-nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
  document.querySelectorAll('.faq-question').forEach(btn=>btn.addEventListener('click',()=>{const answer=document.getElementById(btn.getAttribute('aria-controls'));const open=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!open));if(answer)answer.classList.toggle('open',!open);}));
  document.querySelectorAll('[data-mail-form]').forEach(form=>form.addEventListener('submit',e=>{
    e.preventDefault();
    const fd=new FormData(form);const type=form.dataset.mailForm;
    const name=(fd.get('name')||'').toString().trim();const phone=(fd.get('phone')||'').toString().trim();const email=(fd.get('email')||'').toString().trim();
    if(!name||(!phone&&!email)){alert('Please provide your name and either a phone number or email address.');return;}
    const subject=type==='appointment'?'Callback request — Canby Community Clinic':'General website inquiry — Canby Community Clinic';
    const rows=[`Name: ${name}`,`Phone: ${phone||'Not provided'}`,`Email: ${email||'Not provided'}`,`Preferred language: ${fd.get('language')||'Not provided'}`,`Best time to contact: ${fd.get('contact_time')||'Not provided'}`];
    if(type!=='appointment')rows.push(`General message (no medical details): ${(fd.get('message')||'').toString().trim()}`);
    rows.push('', 'This message intentionally excludes diagnoses, symptoms, test results, insurance member numbers, and other private medical details.');
    window.location.href=`mailto:info@puravidacc.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(rows.join('\n'))}`;
    const msg=form.querySelector('.form-message');if(msg){msg.style.display='block';msg.textContent='Your email app should open. If it does not, call (818) 674-4414.';}
  }));
  const query=new URLSearchParams(window.location.search);const amount=query.get('amount');
  document.querySelectorAll('[data-selected-amount]').forEach(el=>{el.textContent=amount?`$${amount}`:'the amount you choose';});
  const copyBtn=document.querySelector('[data-copy-address]');if(copyBtn)copyBtn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('7601 Canby Ave #6B, Reseda, CA 91335');copyBtn.textContent='Address copied';}catch(e){copyBtn.textContent='7601 Canby Ave #6B, Reseda, CA 91335';}});
})();
