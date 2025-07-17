
function SideBar() {
  return (
    <>
      <aside class="max-xl:fixed max-xl:top-0 max-xl:left-0 max-xl:h-full xl:sticky top-0 flex h-screen flex-col border-r bg-background transition-all duration-300 w-[250px] max-xl:translate-x-0">
                <div class="flex h-16 items-center max-xl:justify-between gap-2 border-b px-4 justify-between"><a
                        class="flex justify-center items-center gap-2" href="index.html"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-book-open h-6 w-6 text-primary" aria-hidden="true">
                            <path d="M12 7v14"></path>
                            <path
                                d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                            </path>
                        </svg><span class="text-xl font-bold">QuizHub</span></a><button class="xl:hidden"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-x size-5" aria-hidden="true">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                        </svg></button></div>
                <div class="flex-1 overflow-auto py-4">
                    <nav class="grid gap-1 px-2"><a
                            class="flex items-center gap-3 rounded-md px-3 py-2 xl:py-2.5 text-sm font-medium transition-colors bg-indigo-500 text-white"
                            href="index.html"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house size-5"
                                    aria-hidden="true">
                                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                    <path
                                        d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
                                    </path>
                                </svg></span><span>Home</span></a><a
                            class="flex items-center gap-3 rounded-md px-3 py-2 xl:py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            href="daily-challenge.html"><span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trophy size-5"
                                    aria-hidden="true">
                                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                    <path d="M4 22h16"></path>
                                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                </svg></span><span>Today&#x27;s Challenge</span></a><a
                            class="flex items-center gap-3 rounded-md px-3 py-2 xl:py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            href="categories.html"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-book-open size-5" aria-hidden="true">
                                    <path d="M12 7v14"></path>
                                    <path
                                        d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                    </path>
                                </svg></span><span>Categories</span></a><a
                            class="flex items-center gap-3 rounded-md px-3 py-2 xl:py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            href="battle.html"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-swords size-5"
                                    aria-hidden="true">
                                    <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline>
                                    <line x1="13" x2="19" y1="19" y2="13"></line>
                                    <line x1="16" x2="20" y1="16" y2="20"></line>
                                    <line x1="19" x2="21" y1="21" y2="19"></line>
                                    <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"></polyline>
                                    <line x1="5" x2="9" y1="14" y2="18"></line>
                                    <line x1="7" x2="4" y1="17" y2="20"></line>
                                    <line x1="3" x2="5" y1="19" y2="21"></line>
                                </svg></span><span>Quiz Battle</span></a><a
                            class="flex items-center gap-3 rounded-md px-3 py-2 xl:py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            href="news.html"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-newspaper size-5" aria-hidden="true">
                                    <path d="M15 18h-5"></path>
                                    <path d="M18 14h-8"></path>
                                    <path
                                        d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2">
                                    </path>
                                    <rect width="8" height="4" x="10" y="6" rx="1"></rect>
                                </svg></span><span>News &amp; Updates</span></a><a
                            class="flex items-center gap-3 rounded-md px-3 py-2 xl:py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            href="explore.html"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass size-5"
                                    aria-hidden="true">
                                    <path
                                        d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z">
                                    </path>
                                    <circle cx="12" cy="12" r="10"></circle>
                                </svg></span><span>Explore Quizzes</span></a><a
                            class="flex items-center gap-3 rounded-md px-3 py-2 xl:py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            href="tournaments.html"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award size-5"
                                    aria-hidden="true">
                                    <path
                                        d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                                    </path>
                                    <circle cx="12" cy="8" r="6"></circle>
                                </svg></span><span>Quiz Tournament</span></a><a
                            class="flex items-center gap-3 rounded-md px-3 py-2 xl:py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            href="leaderboard.html"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-medal size-5"
                                    aria-hidden="true">
                                    <path
                                        d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15">
                                    </path>
                                    <path d="M11 12 5.12 2.2"></path>
                                    <path d="m13 12 5.88-9.8"></path>
                                    <path d="M8 7h8"></path>
                                    <circle cx="12" cy="17" r="5"></circle>
                                    <path d="M12 18v-2h-.5"></path>
                                </svg></span><span>Leaderboard</span></a><a
                            class="flex items-center gap-3 rounded-md px-3 py-2 xl:py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            href="creator-tips.html"><span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-lightbulb size-5" aria-hidden="true">
                                    <path
                                        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5">
                                    </path>
                                    <path d="M9 18h6"></path>
                                    <path d="M10 22h4"></path>
                                </svg></span><span>Quiz Creator Tips</span></a><a
                            class="flex items-center gap-3 rounded-md px-3 py-2 xl:py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            href="quiz-discussions.html"><span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-file-question size-5" aria-hidden="true">
                                    <path d="M12 17h.01"></path>
                                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path>
                                    <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"></path>
                                </svg></span><span>Quiz Discussions</span></a><a
                            class="flex items-center gap-3 rounded-md px-3 py-2 xl:py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            href="create/editor.html"><span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-package-plus size-5" aria-hidden="true">
                                    <path d="M16 16h6"></path>
                                    <path d="M19 13v6"></path>
                                    <path
                                        d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14">
                                    </path>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <line x1="12" x2="12" y1="22" y2="12"></line>
                                </svg></span><span>Create Quiz</span></a><a
                            class="flex items-center gap-3 rounded-md px-3 py-2 xl:py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            href="create/generator.html"><span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles size-5"
                                    aria-hidden="true">
                                    <path
                                        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z">
                                    </path>
                                    <path d="M20 3v4"></path>
                                    <path d="M22 5h-4"></path>
                                    <path d="M4 17v2"></path>
                                    <path d="M5 18H3"></path>
                                </svg></span><span>Ai Quiz Generator</span></a><a
                            class="flex items-center gap-3 rounded-md px-3 py-2 xl:py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            href="affiliate.html"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users size-5"
                                    aria-hidden="true">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                </svg></span><span>Affiliate Page</span></a><a
                            class="flex items-center gap-3 rounded-md px-3 py-2 xl:py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            href="pricing.html"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-dollar-sign size-5" aria-hidden="true">
                                    <line x1="12" x2="12" y1="2" y2="22"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg></span><span>Pricing Plan</span></a><a
                            class="flex items-center gap-3 rounded-md px-3 py-2 xl:py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            href="support.html"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-life-buoy size-5" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m4.93 4.93 4.24 4.24"></path>
                                    <path d="m14.83 9.17 4.24-4.24"></path>
                                    <path d="m14.83 14.83 4.24 4.24"></path>
                                    <path d="m9.17 14.83-4.24 4.24"></path>
                                    <circle cx="12" cy="12" r="4"></circle>
                                </svg></span><span>Support</span></a></nav>
                </div>
                <div class="border-t py-4">
                    <nav class="grid gap-1 px-2"><a
                            class="flex items-center gap-3 rounded-md px-3 py-2 xl:py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            href="#"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out size-5"
                                    aria-hidden="true">
                                    <path d="m16 17 5-5-5-5"></path>
                                    <path d="M21 12H9"></path>
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                </svg></span><span>Logout</span></a></nav>
                </div>
            </aside>
    </>
  )
}

export default SideBar