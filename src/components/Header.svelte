<script lang="ts">
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Articles", link: "/articles/" },
    { id: 3, text: "Article", link: "#" },
    { id: 4, text: "Travel", link: "#" },
    { id: 5, text: "Technology", link: "#" },
  ];

  let nav = false;
  let previousScrollY = 0;
  let isScrollingUp = true;
  let currentRoute: any;

  const handleNav = () => {
    nav = !nav;
    nav
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  };

  onMount(() => {
    currentRoute = window.location.pathname;
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > previousScrollY && currentScrollY > 150) {
      isScrollingUp = false;
    } else if (currentScrollY < previousScrollY || currentScrollY <= 150) {
      isScrollingUp = true;
    }
    previousScrollY = currentScrollY;
  };
</script>

<header
  class={`bg-[hsla(0,100%,100%,0.9)] dark:bg-zinc-950 py-2 lg:py-4 backdrop-blur-sm backdrop-saturate-200 z-50 shadow border-b w-full sticky top-0 transition-all duration-300 ease-in-out ${isScrollingUp ? "translate-y-0" : "-translate-y-full"}`}
>
  <!-- Desktop nav  -->
  <nav class="container items-center justify-between hidden gap-8 lg:flex">
    <div class="text-xl font-bold">
      <a href="/">My Blog</a>
    </div>

    <ul class="flex items-center gap-8 font-medium">
      {#each navItems as item (item.id)}
        <li
          class={`hover:text-lightBlue transition ${
            currentRoute === item.link
              ? "border-b-2 border-lightBlue"
              : "border-b-2 border-transparent"
          }`}
        >
          <a href={item.link}>{item.text}</a>
        </li>
      {/each}
    </ul>

    <ul class="flex items-center gap-2.5">
      <li>
        <a href="" class="hover:text-lightBlue transition">
          <span class="text-2xl">
            <Icon icon="ic:baseline-facebook" />
          </span>
        </a>
      </li>
      <li>
        <a href="" class="hover:text-lightBlue transition">
          <span class="text-2xl">
            <Icon icon="ri:twitter-x-fill" />
          </span>
        </a>
      </li>
      <li>
        <a href="" class="hover:text-lightBlue transition">
          <span class="text-2xl">
            <Icon icon="ri:instagram-fill" />
          </span>
        </a>
      </li>
      <li>
        <a href="" class="hover:text-lightBlue transition">
          <span class="text-2xl">
            <Icon icon="ic:baseline-reddit" />
          </span>
        </a>
      </li>
    </ul>
  </nav>
  <!-- /desktop nav  -->

  <!-- mobile nav  -->
  <nav class="lg:hidden">
    <div class="container flex items-center justify-between gap-6">
      <div class="text-xl font-bold">
        <a href="/">My Blog</a>
      </div>

      <div>
        <button on:click={handleNav} class="cursor-pointer">
          <span class="text-4xl">
            <Icon
              icon={nav ? "material-symbols:close" : "material-symbols:menu"}
            />
          </span>
        </button>
      </div>
    </div>

    {#if nav}
      <div
        class="flex flex-col w-full gap-2 pb-8 pt-2 absolute font-medium top-0 bg-white dark:bg-zinc-950 h-screen"
        transition:fly
      >
        <div
          class="container flex items-center justify-between gap-6 border-b pb-2 shadow"
        >
          <div class="text-xl font-bold">
            <a href="/">My Blog</a>
          </div>

          <div>
            <button on:click={handleNav} class="cursor-pointer">
              <span class="text-4xl">
                <Icon icon="material-symbols:close" />
              </span>
            </button>
          </div>
        </div>

        <ul class="container">
          {#each navItems as item (item.id)}
            <li class="py-2">
              <a
                href={item.link}
                class={`flex items-center justify-between gap-4 px-3 py-3 rounded ${
                  currentRoute === item.link
                    ? "bg-lightBlue text-white"
                    : "bg-zinc-100 dark:bg-zinc-900"
                }`}
                on:click={handleNav}
              >
                {item.text}
                <span class="text-2xl">
                  <Icon icon="material-symbols:chevron-right" />
                </span>
              </a>
            </li>
          {/each}

          <li>
            <ul class="flex gap-2.5 items-center flex-wrap my-4 justify-center">
              <li>
                <a href="">
                  <span class="text-4xl">
                    <Icon icon="ic:baseline-facebook" />
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span class="text-4xl">
                    <Icon icon="ri:twitter-x-fill" />
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span class="text-4xl">
                    <Icon icon="ri:instagram-fill" />
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span class="text-4xl">
                    <Icon icon="ic:baseline-reddit" />
                  </span>
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div class="container">
          <button
            class="w-full px-3 py-3 text-white rounded bg-zinc-800"
            on:click={handleNav}
          >
            Close Menu
          </button>
        </div>
      </div>
    {/if}
  </nav>
  <!-- mobile nav -->
</header>
