<template>
  <div class="header-wrapper">
    <header
        class="header"
        ref="header"
    >
      <nav
          class="nav"
          :class="{'open-burger': burgerOpen}"
      >
        <transition name="fade">
          <div
              v-show="burgerOpen"
              class="burger-menu"
          />
        </transition>
        <div class="nav-links-wrapper">
          <div class="nav-left">
            <NuxtLink @click="closeBurger" to="/">Главная</NuxtLink>
            <NuxtLink @click="closeBurger" to="about">О нас</NuxtLink>
          </div>
          <div class="nav-right">
            <div class="nav-right__links">
              <NuxtLink @click="closeBurger" to="/catalog">Каталог</NuxtLink>
            </div>
          </div>
        </div>
        <div class="nav-right__icons">
          <NuxtLink class="header-icons cart" @click="closeBurger" to="/profile">
            <img src="/images/header-lk.svg" alt="lk" width="22">
          </NuxtLink>
          <NuxtLink class="header-icons cart" @click="closeBurger" to="/cart">
            <img src="/images/header-cart.svg" alt="cart" width="22">
            <p class="cart-number">{{cart.length}}</p>
          </NuxtLink>
        </div>
        <button class="logo-wrapper">
          <a href="">
            <img class="logo" src="/images/header-logo.svg" alt="logo" width="110">
          </a>
        </button>
        <div
            class="nav-icon-burger"
            :class="{'open': burgerOpen}"
            @click="burgerToggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
const cart = useCart();
const burgerOpen = ref(false)
const HEADER_HEIGHT = 60
let body = null

function burgerToggle() {
  burgerOpen.value = !burgerOpen.value
}

function closeBurger() {
  burgerOpen.value = false
}
const isMobile = useIsMobile()

watch(isMobile, ()=>{
      if (!isMobile.value) {
        burgerOpen.value = false
      }
    }
)

</script>

<style lang="scss" scoped>
@import "../assets/css/variables";
.header-wrapper {
  position: sticky;
  top: 0;
}

.header {
  border-bottom: 1px solid $black;
  background-color: $white;
  z-index: 1007;
  height: 60px;

  .nav {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    height: 100%;
    white-space: nowrap;
    gap: 30px;

    @include tablet() {
      justify-content: right;
    }
    a {
      color: $black;
    }

    .nav-links-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
      @include tablet() {
        display: none;
      }
      .nav-left {
        display: flex;
        align-items: center;
        gap: 30px;

        @include tablet() {
          align-items: start;
          flex-direction: column;
          gap: 10px;
        }
      }

      .nav-right {
        display: flex;

        &__links {
          display: flex;
          align-items: center;
          gap: 30px;
        }
      }
    }

    .nav-right__icons {
      display: flex;
      align-items: center;
      flex: 0 1 10%;

      .header-icons {
        margin: 0 15px;
        position: relative;

        @include tablet() {
          display: none;
        }

        .cart-number {
          position: absolute;
          font-size: 10px;
          top: 60%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
      }

      .cart {
        display: flex;
        @include tablet() {
          display: flex;
        }
      }
    }

    .logo-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .logo {
        width: 110px;
      }
    }

    .burger-menu {
      position: fixed;
      top: 59px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: $white;
      display: none;
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }
  }

  .open-burger {
    .burger-menu {
      display: block;
    }

    .nav-links-wrapper {
      position: fixed;
      top: 80px;
      left: 10px;
      display: flex;
      flex-direction: column;

      @include tablet() {
        gap: 10px;
      }
    }
  }

  .nav-icon-burger {
    width: 20px;
    height: 14px;
    transform: rotate(0deg) translate(0, -50%);
    transition: .5s ease-in-out;
    cursor: pointer;
    display: none;
    position: absolute;
    top: 50%;
    left: 20px;

    @include tablet() {
      display: block;
    }

    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: $black;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: .25s ease-in-out;
    }
  }

  .nav-icon-burger span:nth-child(1) {
      top: 0px;
      transform-origin: left center;
    }


  .nav-icon-burger span:nth-child(2) {
    top: 6px;
    transform-origin: left center;
  }

  .nav-icon-burger span:nth-child(3) {
    top: 12px;
    transform-origin: left center;
  }

  .nav-icon-burger.open span:nth-child(1) {
    transform: rotate(45deg);
    top: -1px;
    left: 3px;
  }

  .nav-icon-burger.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  .nav-icon-burger.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
    left: 3px;
  }
}
.header-fixed-body {
  margin-top: 60px;
}

</style>


