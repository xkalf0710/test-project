<script lang="ts"> 
   import logo from '$lib/images/logo1.png'
   import type {ActionData} from './$types'
   import Icon from '@iconify/svelte'

//    export let form: ActionData

   let showPassword = false

   function toggleShowPassword() {
		showPassword = !showPassword
	}
      
</script>

<div class="h-screen md:grid md:grid-cols-2">
    <div class="hidden bg-black md:block">
        <img src={logo} alt="japanese logo" class="w-full" />
    </div>
    <div class="flex h-full flex-col p-2 md:p-3">
        
        <div class="mx-auto flex flex-grow flex-col justify-center md:w-4/5 md:-translate-y-24">
             <div class="mx-auto flex w-4/5 flex-col justify-center md:w-full">
                <p class="text-center text-[8px] text-black md:text-xs">
                    Япон хэлний сургалтандаа бүртгүүллээд хичээлээ сурцгаарай.
                </p>
            </div>
            <form class="mt-4 flex w-full flex-col items-center gap-4 md:gap-6" action="/login" method="POST"> 
                <div class="relative w-full px-4 text-black md:w-4/5">
                    <input class="w-full content-center rounded-xl border border-[#ccc] py-2 px-4 align-top drop-shadow-lg focus:text-black md:py-5 md:px-10" type="email" placeholder="И-мэйл" name="email" autocomplete="email"
                     value=""/>
                     <!-- {form?.data?.email || ''} />
                    {#if form?.errors?.find(i => i.field === '')}
                      <p class="text-red-500">
                        {form?.errors.find(i => i.field === 'email')?.message}</p>
                    {/if} -->
                </div>
                <div class="relative flex w-full items-center px-4 text-black md:w-4/5">
                    <input
						class="w-full content-center rounded-xl border border-[#ccc] py-2 px-4 align-top drop-shadow-lg focus:text-black md:py-5 md:px-10"
						type={showPassword ? 'text' : 'password'}
						placeholder="нууц үг"
						autocomplete="current-password"
						value=''
						name="password"
					/>
                    
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <span class="absolute right-6 cursor-pointer md:right-4" on:click={toggleShowPassword}>
                        {#if showPassword}
                            <Icon icon="bx:show" width="30" color="#c4c4c4"/>
                          {:else}
                          <Icon icon="bx:hide" width="30" color="#c4c4c4" />
                        {/if}
                    </span>

                    <!-- {#if form?.errors?.find(i => i.field === 'password')}
						<p class="text-red-500">{form?.errors.find(i => i.field === 'password')?.message}</p>
					{/if} -->
                </div>

                <div class="relative flex w-full justify-between px-4 text-black md:w-4/5">
                    <p class="text-red-500"></p>
                    <!-- {form?.message || ''} -->
                    <a href="/forgot-password" class="text-xs text-black underline md:text-base">
						Нууц үг мартсан?
					</a>
                </div>
                <div class="relative w-full px-4 text-[#cecfd5] md:w-4/5">
                    <input
						type="submit"
						class="w-full rounded-lg bg-black p-2 text-white drop-shadow md:p-4"
						value="Нэвтрэх"
					/>
                </div>
            </form>
        </div>
        <div class="mt-auto mb-2"> 

            <p class="text-center text-[#ccc]">
                Бүртгэл хэрэгтэй байна ?
				<a href="/signup" class="text-black underline">БҮРТГҮҮЛЭХ </a>
            </p>
        </div>
    </div>
</div>