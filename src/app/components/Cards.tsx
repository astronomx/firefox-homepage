export default function Cards() {
    return(
        <>
            <div className="flex flex-row space-x-12">
                <div className="hidden lg:flex bg-[#FF9EFF] h-72 w-56 rounded-xl p-4">
                    <div className="flex flex-col w-full">
                        <div className="flex justify-end">
                            <h1 className="text-xl font-bold">Programming</h1>
                        </div>
                        <div className="flex flex-col text-end text-lg space-y-3">
                            <div className="flex flex-row justify-between items-center">
                                <img src="/icons/programming/computer-old-electronics.png" alt="Computer met een gezicht" />
                                <a href="https://chat.openai.com/">ChatGPT</a>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <img src="/icons/programming/coding-apps-websites-programming-hold-code.png" alt="Icoon van handen met een code eind tag" />
                                <a href="https://github.com/">Github</a>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <img src="/icons/programming/ui-design-website.png" alt="Icoon met een bord met daar op een driekhoek, rondje en een vierkant" />
                                <a href="https://tailwindcss.com/docs/installation">Tailwind Docs</a>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <img src="/icons/programming/coding-apps-websites-live-status.png" alt="Icoon van live gaan" />
                                <a href="https://vercel.com/astronomx">Vercel</a>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <img src="/icons/programming/photography-light-mode-flash-on.png" alt="Icoon van een bliksemschicht" />
                                <a href="https://supabase.com/dashboard/projects">Supabase</a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex bg-[#FF9EFF] h-72 w-56 rounded-xl p-4">
                    <div className="flex flex-col w-full">
                        <div className="flex justify-end">
                            <h1 className="text-xl font-bold">Working Tools</h1>
                        </div>
                        <div className="flex flex-col text-end text-lg space-y-1">
                            <div className="flex flex-row justify-between items-center">
                                <img src="/icons/work/content-files-note.png" alt="Icoon van een document" />
                                <a href="https://docs.google.com/document/u/0/?hl=nl">Google Docs</a>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <img src="/icons/work/coding-apps-websites-plugin.png" alt="Icoon van een driehoek, vierkant en cirkel die in een doos vallen" />
                                <a href="https://www.notion.so/Quentin-s-Dashboard-53314d6314c34ec387438c494069b13c">Notion</a>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <img src="/icons/work/interface-essential-shrink-3.png" alt="Icoon van 4 pijlen die bij elkaar komen" />
                                <a href="https://connectme.horizoncollege.nl/">ConnectMe</a>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <img src="/icons/work/technology-robot-ai-signal-1.png" alt="Icoon van een lachende robot" />
                                <a href="https://purmerend.jarvis.bit-academy.nl/a/dashboard">Jarvis</a>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <img src="/icons/work/email-mailbox-open.png" alt="Icoon van een brievenbus die open staat" />
                                <a href="https://chat.jarvis.bit-academy.nl/5da436d8-de0a-11ea-b861-cec41367f4e7/channels/town-square">Mattermost</a>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <img src="/icons/work/multiple-user.png" alt="Icoon van 3 personen bij elkaar" />
                                <a href="https://trello.com/u/quentin_valen/boards">Trello</a>
                            </div>


                            <div className="flex flex-row justify-between items-center">
                                <img src="/icons/work/logo-linkedin.png" alt="LinkedIn logo" />
                                <a href="https://www.linkedin.com/in/quentinvalen">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex bg-[#FF9EFF] h-72 w-56 rounded-xl p-4">
                    <div className="flex flex-col w-full">
                        <div className="flex justify-end">
                            <h1 className="text-xl font-bold">Entertainment</h1>
                        </div>
                        <div className="flex flex-col text-end text-lg space-y-3">
                            <div className="flex flex-row justify-between items-center">
                                <img src="/icons/entertainment/logo-social-media-youtube.png" alt="youtube logo" />
                                <a href="https://www.youtube.com/">YouTube</a>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <img src="/icons/entertainment/logo-twitter.png" alt="youtube logo" />
                                <a href="https://twitter.com/">Twitter</a>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <img src="/icons/entertainment/entertainment-events-hobbies-popcorn.png" alt="Popcorn logo" />
                                <a href="https://www.netflix.com/browse">Netflix</a>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <img src="/icons/entertainment/logo-social-media-instagram-circle.png" alt="Pokemonbal logo" />
                                <a href="https://aniwave.to/home">AniWave</a>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <img src="/icons/entertainment/video-movies-vintage-tv-3.png" alt="Soap today logo" />
                                <a href="https://soap2day.rs/movie?page=1">Soap2Day</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

