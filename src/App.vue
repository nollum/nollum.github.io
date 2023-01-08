<script>
</script>

<template>
 <main>
 <div class="nav">
  <router-link :to="{ name: 'Home' }">Home</router-link> 
  <router-link :to="{ name: 'Projects' }">Projects</router-link> 
  <a href="/resume_v3.pdf" target="_blank">Resume</a>
 </div>
 <router-view />
 <div class="footer">
  <a href="https://github.com/Nollum" target="_blank"><img src="@/assets/github.png" alt="github"></a>
  <a href="https://www.linkedin.com/in/mamedovrustam/" target="_blank"><img src="@/assets/linkedin.png" alt="linkedin"></a>
 </div>
 </main>
</template>

<style scoped>

  main {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
  } 

  .nav {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    /* background: #000; */
  }

  @media (max-width: 500px) {
    .nav {
      flex-direction: column;
    }
  }

  /* .nav a {
    text-align: center;
    margin: 20px 20px;
    padding: 10px 40px;
    border: none;
    border-radius: 20px;
    background-color: #00804a;
    transition: 0.3s; 
  } */

  .nav a {
    text-align: center;
    margin: 20px 20px;
    padding: 10px 40px;
    border: 0 solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid;
    outline-color: rgba(255, 255, 255, .5);
    outline-offset: 0px;
    text-shadow: none;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    border-radius: 20px;
} 

.nav a:hover {
  /* border: 1px solid; */
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.589), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388; 
}
/* 
  .nav a:hover {
    background-color: #30b357;
  } */

  .footer {
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .footer img:hover {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 30px 0px #ffffff;
    -moz-box-shadow:    0px 0px 30px 0px #ffffff;
    box-shadow:         0px 0px 30px 0px #ffffff;
  }

 </style>
