import React from 'react'

function FAQ() {

    const faQuestions = [
        {
            title: 'Why do I need PassVault',
            desc: 'You need PassVault to manage all your passwords at one place. We save you hours which you spend managing your passwords, and most of the time resetting them! Once you start using PassVault, you will get all your passwords at one place.'
        },
        {
            title: 'Do I need to pay every month?',
            desc: "Absolutely not! You need to pay only once and then it's yours for the rest of your life!"
        },
        {
            title: 'Is PassVault safe?',
            desc: 'Yes, PassVault is absolutely safe as we do not save your passwords directly but rather we totally encrypt them and then save them. So you are the only one who know what is saved!'
        },
        {
            title: 'Can I get a refund?',
            desc: 'No, refund is not possible as our service works ona one-time payment system.'
        }
    ]

    return (
        <>
            <div class="max-w-screen-xl mx-auto px-5 min-h-sceen max-md:px-8 ">
                <div class="flex flex-col items-center">
                    <h2 class="font-bold text-5xl mt-5 tracking-tight">
                        FAQ
                    </h2>
                    <p class="text-neutral-500 text-xl mt-3">
                        Frequenty asked questions
                    </p>
                </div>

                {/* The Main FAQ Section */}


                <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">

                    {

                        faQuestions.map((question) => (
                            <div class="py-5">
                                <details class="group">
                                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <span>{question.title}</span>
                                        <span class="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                        {question.desc}
                                    </p>
                                </details>
                            </div>
                        )
                        )


                    }



                </div>
            </div>

            <script>

            </script>
        </>
    )
}

export default FAQ