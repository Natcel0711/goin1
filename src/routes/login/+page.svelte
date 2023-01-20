<script lang="ts">
	import type { ActionData, PageData } from "./$types";
    export let data:PageData
    export let form:ActionData
    console.log(form)
</script>

<article class="grid">
	<div>
	  <hgroup>
		<h1>Sign in</h1>
		<h2>Start making your life easier</h2>
	  </hgroup>
	  <form action="?/login" method="post">
		<input type="email" value={form?.email ?? ''} id="email" name="email" placeholder="Email address" required />
		<input type="password" id="password" name="password" placeholder="Password" required />
		<fieldset>
		  <label for="remember">
			<input type="checkbox" role="switch" id="remember" name="remember">
			Remember me
		  </label>
		</fieldset>
		<button type="submit" class="contrast">Login</button>
	  </form>
	</div>
	<div></div>
  </article>


  <style>
	/* Grid */
body > main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - 7rem);
    padding: 1rem 0;
  }
  
  article {
    padding: 0;
    overflow: hidden;
  }
  
  article div {
    padding: 1rem;
  }
  
  @media (min-width: 576px) {
    body > main {
      padding: 1.25rem 0;
    }
  
    article div {
      padding: 1.25rem;
    }
  }
  
  @media (min-width: 768px) {
    body > main {
      padding: 1.5rem 0;
    }
  
    article div {
      padding: 1.5rem;
    }
  }
  
  @media (min-width: 992px) {
    body > main {
      padding: 1.75rem 0;
    }
  
    article div {
      padding: 1.75rem;
    }
  }
  
  @media (min-width: 1200px) {
    body > main {
      padding: 2rem 0;
    }
  
    article div {
      padding: 2rem;
    }
  }
  
  /* Nav */
  summary[role="link"].secondary:is([aria-current],:hover,:active,:focus) {
    background-color: transparent;
    color: var(--secondary-hover);
  }
  
  /* Hero Image */
  article div:nth-of-type(2) {
    display: none;
    background-color: #374956;
    background-image: url("../../lib/styles/pics/alessio-soggetti-8jeWeKdygfk-unsplash-1000x1200.jpg");
    background-position: center;
    background-size: cover;
  }
  
  @media (min-width: 992px) {
    .grid > div:nth-of-type(2) {
      display: block;
    }
  }
  
  /* Footer */
  body > footer {
    padding: 1rem 0;
  }
  </style>