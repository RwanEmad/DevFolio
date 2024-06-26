var typed = new Typed("#typed", {
    strings: ["Designer", "Develper", "Freelaner", "Photographer"],
    typedSpeed: 100,
    startDelay: 150,
    backDelay: 1500,
    backSpeed: 150,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: "|",

})



function animateCounters() {
    const counters =
        document
            .querySelectorAll(".counter");
    counters
        .forEach((counter, index) => {
            const target =
                parseInt(counter
                    .getAttribute(
                        "data-target")
                );
            const duration = 2500;
            const step =
                Math.ceil(
                    (target / duration) * 15
                );
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current <= target) {
                    counter
                        .innerText = current;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };

            setTimeout(() => {
                updateCounter();
            }, index * 500);
            // Delay each counter by 1 second 
        });
}

animateCounters();