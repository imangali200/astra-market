<template>
  <div
    class="tw-max-w-[1300px] tw-w-full tw-flex tw-justify-center tw-my-[70px] tw-mx-auto"
  >
    <div
      class="tw-max-w-[530px] tw-max-h-[712px] tw-w-full tw-h-full tw-border-[1px] tw-border-gray-300 tw-rounded-[16px] tw-flex tw-flex-col tw-items-center tw-justify-center md:tw-p-[80px] tw-py-[30px] tw-px-[16px] tw-mx-[16px]"
    >
      <h1 class="tw-text-[32px] tw-font-semibold tw-mb-[40px]">Регистрация</h1>
      <div
        class="tw-flex tw-items-center tw-w-full tw-flex-col tw-gap-4 tw-mb-[30px]"
      >
        <input
          style="border: 1px solid gray; border-radius: 14px"
          class="tw-max-w-[370px] tw-w-full tw-h-[48px] tw-pl-3"
          type="text"
          placeholder="Фамилия"
        />
        <input
          style="border: 1px solid gray; border-radius: 14px"
          class="tw-max-w-[370px] tw-w-full tw-h-[48px] tw-pl-3"
          type="password"
          placeholder="Имя"
        />
        <input
          style="border: 1px solid gray; border-radius: 14px"
          class="tw-max-w-[370px] tw-w-full tw-h-[48px] tw-pl-3"
          type="password"
          placeholder="Номер телефона"
        />
        <input
          style="border: 1px solid gray; border-radius: 14px"
          class="tw-max-w-[370px] tw-w-full tw-h-[48px] tw-pl-3"
          type="password"
          placeholder="Пароль"
        />
        <input
          style="border: 1px solid gray; border-radius: 14px"
          class="tw-max-w-[370px] tw-w-full tw-h-[48px] tw-pl-3"
          type="password"
          placeholder="Подтвердить пароль"
        />
      </div>

      <button
        class="tw-bg-[#FF8A00] tw-text-white tw-max-w-[370px] tw-w-full tw-h-[48px] tw-rounded-[8px]"
      >
        Зарегистрироваться
      </button>
      <div
        class="tw-flex tw-w-full tw-flex-wrap tw-items-center tw-justify-center tw-gap-2 tw-mt-[20px]"
      >
        <p class="tw-text-[#414141] tw-text-sm">Уже зарегистрированные?</p>
        <NuxtLink to="/login">
          <p class="tw-text-[#34398B] tw-underline tw-text-sm">
            <a href="">Войти</a>
          </p>
        </NuxtLink>
      </div>

      <p style="text-align: center;" class="tw-text-center tw-mt-3 tw-text-sm">
        Регистрируя аккаунт, вы подтверждаете, что прочитали и приняли Политику
        конфиденциальности
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
