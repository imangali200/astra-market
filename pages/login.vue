<template>
  <div class="tw-max-w-[1300px] tw-w-full tw-flex tw-justify-center tw-my-[70px] tw-mx-auto">
    <div
      class="tw-max-w-[530px] tw-max-h-[506px] tw-w-full tw-h-full tw-border-[1px] tw-border-gray-300 tw-rounded-[16px] tw-flex tw-flex-col tw-items-center tw-justify-center md:tw-p-[80px] tw-py-[30px] tw-px-[16px]  tw-mx-[16px]"
    >
      <h1 class="tw-text-[32px] tw-font-semibold tw-mb-[40px]">Вход</h1>
      <div class="tw-flex tw-items-center tw-w-full tw-flex-col tw-gap-4 tw-mb-[30px]">
        <input
          style="border: 1px solid gray; border-radius: 14px"
          class="tw-max-w-[370px] tw-w-full tw-h-[48px] tw-pl-3"
          type="text"
          placeholder="Телефон"
        />
        <input
          style="border: 1px solid gray; border-radius: 14px"
          class="tw-max-w-[370px] tw-w-full tw-h-[48px] tw-pl-3"
          type="password"
          placeholder="Пароль"
        />
        <p class="tw-text-[#414141] tw-text-end tw-max-w-[370px] tw-w-full">
        Забыли пароль?
      </p>
      </div>

      <button
        class="tw-bg-[#FF8A00] tw-text-white tw-max-w-[370px] tw-w-full tw-h-[48px] tw-rounded-[8px]"
      >
        Войти
      </button>
      <div class="tw-flex tw-w-full tw-flex-wrap tw-items-center tw-justify-between tw-mt-[20px]">
        <p class="tw-text-[#414141] tw-text-sm">Нет учетной записи?</p>
        <NuxtLink to="/register">
            <p class="tw-text-[#34398B] tw-underline tw-text-sm"><a href="">Зарегистрироваться</a></p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
