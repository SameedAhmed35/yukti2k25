function calculateCost() {
    const selectedEvents = document.querySelectorAll('input[name="events[]"]:checked').length;
    const costPerEvent = 200;
    let totalCost;

    if (selectedEvents > 0) {
        totalCost = selectedEvents * costPerEvent - Math.floor(selectedEvents / 4) * costPerEvent;
    } else {
        totalCost = 0;
    }

    document.getElementById('totalCost').innerText = `Total Cost: ₹${totalCost}`;
}

function updateEvents(category) {
    const events = {
        "Cultural": [
            "Neon Moves (Dance - Group/Solo)",
            "Echo of the Cosmos (Singing - Group/Solo)",
            "Circuit Tales (Nukkad Natak)",
            "Resonance Reign (Battle of Bands)",
            "DJ Resonance Reign (Battle of DJs)",
            "Pixel Chronicles (Photography - Reel Showdown, Cinematography/Short-Film)",
            "Futuristic Vogue (Ramp Walk - Corporate Walk)"
        ],
        "Technical": [
            "Innovator's Showcase (Technical Paper Presentation)",
            "Clash of Minds (Technical Debate)",
            "Math Matrix (Math Relay)",
            "Code Hunters (Debugging)"
        ],
        "Management": [
            "Cyber Strategist Challenge (Best Manager)",
            "Hyperloop Innovations (Product Launch - Marketing)",
            "HR Virtuoso (Best HR)",
            "VITI Legends (VITI Masters)",
        ],
        "Gaming & Adventure Zone": [
            "CyberConquest (Quiz - Logo Quiz, Puzzle, Fastest Finger First)",
            "CodeBreak Labyrinth (Escape Room)",
            "PixelPlay Zone (GameZone)"
        ],
        "Art & Creativity": [
            "Digital Visions (Face Painting)",
            "Neon Spectrum Creations (Rangoli)",
            "FlashFrame Finesse (Photography Showcase)",
            "Design Evolution (Raw to Beautification)"
        ],
        "Robotics & Mechanical": [
            "RoboRace Chronicles (RoboRace)",
            "CyberKick Arena (RoboSoccer)",
            "MechaMayhem (RoboWar)",
            "PathTracer Challenge (Line Follower Robot)",
            "SkyForge 2147 (Aerospace Innovation)"
        ],
        "Open Mic": [
            "Glitch and Giggles (Stand-up comedy)",
            "Echoverse (Poetry/Open word/shayari)",
            "Cyber Expressions (Mimicry)",
            "Cyber Masquerade (MIME ACT)"
        ]
    };

    const eventList = events[category] || [];
    const eventCheckboxContainer = document.getElementById('eventCheckboxContainer');

    eventCheckboxContainer.innerHTML = eventList.map(event => `
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="${event}" name="events[]" value="${event}" onchange="calculateCost()">
                    <label for="${event}">${event}</label>
                </div>
            `).join('');
}

document.getElementById("go-back").onclick = function () {
    location.href = "https://yukti.bastamasta.dev/";
};