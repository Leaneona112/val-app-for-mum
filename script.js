        // Play the greeting audio when the page loads
        window.onload = () => {
            const audio = document.getElementById('greetingAudio');

            // Set a default volume (for example, 0.5 which is 50% volume)
            audio.volume = 0.1;
            
            // Wait for user interaction before playing
            document.body.addEventListener("click", () => {
                audio.play();
            }, { once: true }); // Runs only once

            startConfetti();
        };
        

        // Messages for mum
        const messages = [
            "Happy val mum! ❤️",
            "Mom, you are the best! Love you! ❤️",
            "Thanks for always being there, Mom! 🙌",
            "You're my hero, Mom! 🦸‍♀️",
            "I wouldn't be who I am without you, Mom! 💪",
            "You're the rock in my life, Mom! 🏔️",
            "No one makes me laugh like you, Mom! 😂",
            "You're my role model, Mom! 💯",
            "I’m proud to be your kid, Mom! 🌟",
            "Mom, you always know how to fix things! 🛠️",
            "You’re the best advice-giver I know, Mom! 📚",
            "Thanks for always supporting me, Mom! 💚",
            "You make life so much better, Mom! 🌞",
            "Every moment with you is a memory I cherish, Mom! ⏳",
            "You make everything possible, Mom! 🌟",
            "Mom, you’re simply amazing! 💖",
            "No matter where life takes me, I’ll always look up to you, Mom! 🙏",
            "You taught me the value of hard work, Mom. I’ll never forget that! 💼",
            "I hope to be half the parent you are, Mom. You’re a legend! 👏",
            "The sacrifices you've made for me don't go unnoticed, Mom. I love you more each day. 💕",
            "Mom, your wisdom has shaped me into who I am. Thank you for everything. 🧠",
            "I wish I could put into words just how much I appreciate you, Mom. 🙏",
            "Every piece of advice you’ve given me has been a guiding light, Mom. 💡",
            "You’re the reason I always feel safe and loved, Mom. ❤️",
            "Mom, I’m so grateful for the way you raised me. Thank you for making me strong. 💪",
            "I never knew what true love was until I realized how much you loved me, Mom. 💖",
            "I’ll forever be grateful for the lessons you taught me, Mom. They’ll last a lifetime. 🕰️",
            "You taught me to be brave, kind, and compassionate. You’ve shaped my heart, Mom. 💕",
            "Thank you for being my rock, my protector, and my number one fan. 🛡️",
            "Your strength gives me strength, Mom. I admire you so much. 💪",
            "Mom, you’re the foundation of our family. You make everything work. 🏗️",
            "I am the person I am today because of you, Mom. Thank you. 🙌",
            "You’ve given me everything I need to succeed, Mom. I’ll make you proud. 🎯",
            "Your love is the best gift I could ever ask for, Mom. 🎁",
            "There’s no one else I’d rather have as a role model. You set the standard, Mom. 💯",
            "You’re not just a mother, you’re a superhero in disguise, Mom. 🦸‍♀️",
            "I want to be as brave, wise, and kind as you are, Mom. You inspire me. 💪",
            "You’re the best mom anyone could ask for, and I feel so lucky to be your child. 🍀",
            "Your guidance, love, and patience have meant the world to me, Mom. 🌎",
            "Whenever I feel lost, I think of you, and everything feels right again. 🧭",
            "Your love has been my biggest strength through all of life’s challenges. 💪",
            "I will always be proud to be your child, Mom. You make me proud every single day. 🏅",
            "I carry your wisdom in my heart, Mom. You are always with me. 💡",
            "I will never forget how you always made sure I felt special, even on the hardest days. 💖",
            "Mom, thank you for showing me the true meaning of unconditional love. 💞",
            "You’ve given me the courage to follow my dreams, Mom. Thank you for believing in me. 🌟",
            "Every day with you is a blessing. I am so lucky to have you as my mom. 🌞",
            "When I look at you, I see everything I want to be—strong, wise, and loving. 💪",
            "Your love has been the one constant in my life, Mom. Thank you for never wavering. 💖",
            "You are a treasure in my life, Mom. I hold you dear to my heart. 🏆",
            "Thank you for showing me that love isn’t just a feeling, it’s something you show through actions. 💝",
            "You’ve taught me that true strength comes from within, Mom. I am who I am because of you. 🏋️‍♀️",
            "You made my world so much better, Mom, simply by being in it. 🌏",
            "I hope to make you as proud as you’ve made me, Mom. 🎓",
            "You’ve given me everything I need to conquer the world. Thank you, Mom. 🏆",
            "Mom, you are my biggest inspiration. I could never thank you enough for that. 💡",
            "You’ve made me the person I am today with your kindness, love, and wisdom. 💖",
            "Your support means everything to me, Mom. I’ll always carry your words with me. ✨",
            "You’ve been my mentor, my guide, and my hero. I’ll forever be grateful. 🙏",
            "I can never repay you for all you’ve done for me, but I promise I’ll try my best. 🙏",
            "You’ve shaped my world in more ways than I can count, Mom. Thank you for that. 🌍",
            "You’re not just my mother, you’re my greatest supporter and my biggest cheerleader. 🎉",
            "Every time I face adversity, I think of you, and I know I can make it through. 💪",
            "You’ve always been my greatest source of love and comfort, Mom. ❤️",
            "You have been the backbone of our family, Mom, and I am forever grateful for that. 🏠",
            "No matter where life takes me, I know I’ll always have your love, Mom. 🌎",
            "Your love has been the foundation of everything I’ve done, Mom. Thank you. 💖"
        ];
        
        

        // Display a random message and start animation
        document.getElementById('reminderButton').addEventListener('click', function () {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            document.getElementById('message').innerText = randomMessage;
            // startConfetti();
        });

        let lastConfettiTime = 0;

        function startConfetti() {
            let skew = 1;
        
            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }
        
            (function frame() {
                const currentTime = Date.now();
                if (currentTime - lastConfettiTime > 20) {  // Adjust this value for particle spawning frequency
                    confetti({
                        particleCount: 1,
                        startVelocity: 0,
                        ticks: Math.max(200, 500),
                        origin: {
                            x: Math.random(),
                            y: Math.random() * skew - 0.2,
                        },
                        colors: ["#ffffff"],
                        shapes: ["circle"],
                        gravity: randomInRange(0.4, 0.6),
                        scalar: randomInRange(0.4, 1),
                        drift: randomInRange(-0.4, 0.4),
                    });
                    lastConfettiTime = currentTime;
                }
        
                requestAnimationFrame(frame); // Keep the animation running indefinitely
            })();
        }
        