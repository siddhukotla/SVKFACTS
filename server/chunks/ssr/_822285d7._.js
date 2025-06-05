module.exports = {

"[project]/.next-internal/server/app/facts/[factId]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/lib/constants.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ADS_PER_PAGE": (()=>ADS_PER_PAGE),
    "TOTAL_FACTS": (()=>TOTAL_FACTS)
});
const TOTAL_FACTS = 500;
const ADS_PER_PAGE = 9;
}}),
"[project]/src/data/facts.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAllFacts": (()=>getAllFacts),
    "getFactById": (()=>getFactById)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
;
const factCategories = [
    "Finance & Investing",
    "Health & Wellness",
    "Education & Career",
    "Technology & Gadgets",
    "Automobile & Insurance",
    "Cryptocurrency & Web3",
    "Real Estate & Property",
    "Legal & Law",
    "Business & Startups",
    "Travel & Visa Info"
];
const factsDataSource = {
    "Finance & Investing": [
        "Compound interest helps your savings grow faster as you earn interest on your interest.",
        "Diversifying your investments across different asset classes can help reduce overall risk.",
        "A good credit score is crucial for obtaining loans at favorable interest rates.",
        "An emergency fund should ideally cover 3-6 months of essential living expenses.",
        "Exchange Traded Funds (ETFs) offer a low-cost way to invest in a diversified portfolio.",
        "The S&P 500 index tracks the performance of 500 of the largest U.S. publicly traded companies.",
        "A 401(k) is an employer-sponsored retirement plan that allows pre-tax contributions.",
        "Inflation erodes purchasing power over time, making it important for investments to outpace it.",
        "A bull market signifies rising stock prices and investor optimism.",
        "A bear market is characterized by falling stock prices and widespread pessimism.",
        "Return on Investment (ROI) measures the profitability of an investment.",
        "Asset allocation involves dividing an investment portfolio among different asset categories.",
        "Liquidity refers to how easily an asset can be converted into cash without significant loss.",
        "Mutual funds pool money from many investors to invest in stocks, bonds, or other assets.",
        "Bonds are debt securities where an investor loans money to an entity for a defined period.",
        "Stocks represent ownership (equity) in a corporation.",
        "Dollar-cost averaging is investing a fixed amount regularly, regardless of market fluctuations.",
        "Financial advisors can provide personalized guidance for achieving financial goals.",
        "Capital gains tax is levied on profits from the sale of assets like stocks or property.",
        "Dividends are portions of a company's profits paid out to shareholders.",
        "Index funds aim to replicate the performance of a specific market index.",
        "Risk tolerance describes an investor's capacity to endure potential losses.",
        "Fintech companies use technology to improve and automate financial services.",
        "Budgeting is the process of creating a plan to manage your income and expenses.",
        "Net worth is calculated by subtracting total liabilities from total assets.",
        "A brokerage account allows investors to buy and sell securities.",
        "A fiduciary financial advisor is legally obligated to act in your best interest.",
        "Central banks, like the Federal Reserve, manage a nation's currency and monetary policy.",
        "Interest rates affect the cost of borrowing and the returns on savings.",
        "Treasury Bills (T-Bills) are short-term debt obligations issued by the U.S. government.",
        "A Roth IRA offers tax-free growth and tax-free withdrawals in retirement.",
        "Annuities can provide a guaranteed stream of income, often used for retirement.",
        "Market capitalization (market cap) is the total market value of a company's outstanding shares.",
        "Blue-chip stocks are from large, reputable, and financially sound companies.",
        "Value investing involves seeking stocks that appear undervalued by the market.",
        "Growth investing focuses on companies expected to grow at an above-average rate.",
        "The Dow Jones Industrial Average (DJIA) is an index of 30 large U.S. companies.",
        "A prospectus details an investment offering for potential investors.",
        "Securities are tradable financial instruments representing value.",
        "Portfolio rebalancing helps maintain your desired asset allocation over time.",
        "Financial literacy is the ability to understand and manage financial concepts.",
        "Hedge funds use diverse strategies, often catering to accredited investors.",
        "Insider trading, using non-public information for profit, is illegal.",
        "Quantitative Easing (QE) is a monetary policy tool used by central banks to increase money supply.",
        "Venture capital provides funding to startups and early-stage businesses with high growth potential.",
        "Angel investors are individuals who provide capital for business start-ups, usually in exchange for equity.",
        "Crowdfunding allows businesses to raise small amounts of money from many people online.",
        "Microloans are small loans typically provided to entrepreneurs in developing countries.",
        "Algorithmic trading uses computer programs to execute trades at high speeds.",
        "ESG investing considers Environmental, Social, and Governance factors in investment decisions."
    ],
    "Health & Wellness": [
        "Drinking at least 8 glasses of water daily is recommended for proper hydration.",
        "Regular physical activity boosts mood and reduces risks of chronic diseases.",
        "A balanced diet rich in fruits and vegetables supports overall well-being.",
        "Most adults need 7-9 hours of quality sleep per night for optimal health.",
        "Mindfulness meditation can help reduce stress and improve mental clarity.",
        "Sunscreen protects your skin from harmful UV rays, preventing premature aging and skin cancer.",
        "Regular health check-ups can help detect potential issues early.",
        "Probiotics, found in yogurt and fermented foods, support gut health.",
        "Strength training at least twice a week helps maintain muscle mass and bone density.",
        "Fiber aids digestion and can help regulate blood sugar levels.",
        "Omega-3 fatty acids, found in fish, are beneficial for heart and brain health.",
        "Chronic stress can negatively impact your immune system and overall health.",
        "Getting enough Vitamin D is crucial for bone health and immune function.",
        "Limiting processed foods and added sugars can significantly improve your diet.",
        "Practicing good posture can prevent back pain and improve breathing.",
        "Yoga combines physical postures, breathing techniques, and meditation for holistic health.",
        "Adequate protein intake is essential for muscle repair and growth.",
        "Brushing your teeth twice a day and flossing daily prevents dental problems.",
        "Laughing can reduce stress hormones and boost your immune system.",
        "Spending time in nature has been shown to improve mental and physical health.",
        "High-Intensity Interval Training (HIIT) can be an effective way to improve cardiovascular fitness.",
        "Maintaining a healthy weight reduces the risk of many chronic conditions.",
        "Social connections and strong relationships contribute to mental and emotional wellness.",
        "Learning to manage stress effectively is key to long-term health.",
        "Stretching regularly can improve flexibility and reduce the risk of injury.",
        "Blue light from screens before bed can disrupt your sleep cycle.",
        "Antioxidants protect your cells from damage caused by free radicals.",
        "Reading regularly can improve cognitive function and reduce stress.",
        "Setting realistic health goals increases the likelihood of achieving them.",
        "Cooking at home often leads to healthier eating habits.",
        "Deep breathing exercises can help calm the nervous system.",
        "Regular eye exams are important for maintaining good vision.",
        "Herbal teas like chamomile or lavender can promote relaxation.",
        "Eating mindfully, paying attention to your food, can improve digestion.",
        "Keeping a gratitude journal can enhance psychological well-being.",
        "Dark chocolate (in moderation) contains antioxidants and may benefit heart health.",
        "Cross-training, or varying your workouts, can prevent overuse injuries.",
        "Good sleep hygiene includes a consistent sleep schedule and a dark, quiet room.",
        "Taking short breaks to move throughout the day can combat sedentary behavior.",
        "Volunteering can provide a sense of purpose and improve mental health.",
        "Calcium is vital for strong bones and teeth.",
        "Portion control is important for managing calorie intake.",
        "Learning a new skill can keep your brain active and engaged.",
        "Whole grains are a better source of carbohydrates than refined grains.",
        "Listening to music can have a positive impact on mood and stress levels.",
        "Tai Chi is a gentle form of exercise that improves balance and flexibility.",
        "Adequate hydration is crucial for kidney function.",
        "Taking regular breaks from screen time can reduce eye strain.",
        "Eating a variety of colorful fruits and vegetables ensures a wide range of nutrients.",
        "Maintaining hobbies can be a great way to de-stress and find joy."
    ],
    "Education & Career": [
        "Continuous learning is essential for career growth in a rapidly changing world.",
        "Networking can open doors to new job opportunities and collaborations.",
        "A well-crafted resume highlights your skills and experiences effectively.",
        "Setting clear career goals provides direction and motivation.",
        "Soft skills like communication and teamwork are highly valued by employers.",
        "Mentorship can provide valuable guidance and support throughout your career.",
        "Online courses offer flexible ways to acquire new knowledge and skills.",
        "Internships provide practical experience and insights into a chosen field.",
        "Critical thinking and problem-solving are key skills for academic and professional success.",
        "Effective time management is crucial for productivity and reducing stress.",
        "Public speaking skills can significantly enhance career prospects.",
        "Building a strong professional brand helps in creating a positive reputation.",
        "Degrees and certifications can validate your expertise in specific areas.",
        "Adaptability is increasingly important in today's dynamic job market.",
        "Asking for feedback and being open to it is vital for personal development.",
        "A cover letter personalizes your job application and expresses your interest.",
        "Vocational training provides specialized skills for specific trades.",
        "Lifelong learning involves a voluntary and self-motivated pursuit of knowledge.",
        "Negotiating your salary is an important step when accepting a new job offer.",
        "Understanding company culture is key to fitting in and thriving in a workplace.",
        "Developing emotional intelligence can improve workplace relationships and leadership.",
        "Portfolio careers involve having multiple income streams from various jobs or projects.",
        "Upskilling means learning new skills to stay relevant in your current role or industry.",
        "Reskilling involves learning new skills to transition into a different career path.",
        "Project management skills are valuable across many industries.",
        "LinkedIn is a powerful platform for professional networking and job searching.",
        "STAR method (Situation, Task, Action, Result) is useful for answering behavioral interview questions.",
        "Understanding financial literacy is important for managing personal finances related to career income.",
        "Work-life balance is crucial for long-term well-being and career sustainability.",
        "Coding and data analysis are increasingly in-demand skills across various sectors.",
        "Professional development often involves attending workshops, conferences, or seminars.",
        "A growth mindset believes abilities can be developed through dedication and hard work.",
        "Apprenticeships combine on-the-job training with classroom instruction.",
        "MOOCs (Massive Open Online Courses) provide access to a wide range of educational content.",
        "Taking initiative at work can lead to new opportunities and recognition.",
        "Understanding labor laws and employee rights is important for every worker.",
        "Freelancing offers flexibility and autonomy but requires self-discipline.",
        "Personal branding involves shaping public perception of an individual.",
        "Continuing Professional Development (CPD) ensures your skills remain current.",
        "Digital literacy is essential for navigating most modern workplaces.",
        "A strong work ethic is often cited as a key ingredient for success.",
        "Mastering a foreign language can be a significant career asset.",
        "Informational interviews are conversations to learn about a career or industry.",
        "Side hustles can provide additional income and explore entrepreneurial interests.",
        "Effective leadership involves motivating and guiding a team towards a common goal.",
        "Conflict resolution skills are important for maintaining positive work environments.",
        "Creative thinking helps in finding innovative solutions to challenges.",
        "Volunteering can be a way to gain experience and expand your network.",
        "Performance reviews are opportunities to discuss achievements and areas for growth.",
        "Time tracking can help improve focus and identify areas of wasted time."
    ],
    "Technology & Gadgets": [
        "The first electronic programmable computer was Colossus, used during World War II.",
        "Moore's Law predicted that the number of transistors on a microchip doubles about every two years.",
        "The World Wide Web was invented by Tim Berners-Lee in 1989.",
        "Artificial Intelligence (AI) aims to create machines that can perform tasks requiring human intelligence.",
        "Cloud computing allows users to access data and applications over the internet.",
        "The Internet of Things (IoT) refers to the network of physical devices embedded with sensors and software.",
        "Smartphones now possess more computing power than the Apollo 11 mission computers.",
        "Virtual Reality (VR) creates immersive, simulated environments.",
        "Augmented Reality (AR) overlays digital information onto the real world.",
        "Bluetooth technology was named after a 10th-century Danish king, Harald Bluetooth.",
        "Open-source software allows users to view, modify, and distribute its source code.",
        "Quantum computing utilizes principles of quantum mechanics to perform complex calculations.",
        "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.",
        "A firewall is a network security system that monitors and controls incoming and outgoing network traffic.",
        "Machine learning is a subset of AI where systems learn from data without explicit programming.",
        "The term 'bug' for a computer glitch originated from a moth found in an early computer.",
        "Ethernet is a widely used technology for local area networks (LANs).",
        "Wi-Fi uses radio waves to provide wireless high-speed internet and network connections.",
        "Solid State Drives (SSDs) are faster and more durable than traditional Hard Disk Drives (HDDs).",
        "A Universal Serial Bus (USB) is a common interface for connecting peripherals to computers.",
        "RAM (Random Access Memory) is a type of volatile memory used by computers to store working data.",
        "A CPU (Central Processing Unit) is the primary component of a computer that executes instructions.",
        "Binary code, using 0s and 1s, is the fundamental language of computers.",
        "The QWERTY keyboard layout was designed to prevent typewriter jams.",
        "Drones, or Unmanned Aerial Vehicles (UAVs), are used in various fields from photography to delivery.",
        "3D printing, or additive manufacturing, creates objects layer by layer from a digital model.",
        "Wearable technology includes devices like smartwatches and fitness trackers.",
        "The first commercial mobile phone, the Motorola DynaTAC 8000x, weighed about 2.4 pounds.",
        "GPS (Global Positioning System) uses a network of satellites to determine location.",
        "Big Data refers to extremely large data sets that may be analyzed computationally to reveal patterns.",
        "Biometric authentication uses unique biological characteristics like fingerprints for identification.",
        "Algorithm is a set of rules or instructions designed to perform a specific task.",
        "A pixel is the smallest unit of a digital image or display.",
        "CAPTCHA tests are designed to distinguish humans from automated bots.",
        "Malware is malicious software designed to harm or exploit computer systems.",
        "Phishing is a cyberattack that uses deceptive emails or websites to steal sensitive information.",
        "VPN (Virtual Private Network) creates a secure, encrypted connection over a less secure network.",
        "The term 'spam' for unsolicited email comes from a Monty Python sketch.",
        "Responsive web design ensures websites adapt to different screen sizes.",
        "Nanotechnology involves manipulating matter on an atomic and molecular scale.",
        "Streaming services deliver media content over the internet in real-time.",
        "E-waste, or electronic waste, poses significant environmental challenges.",
        "Robotics combines engineering and computer science to design and operate robots.",
        "The first mouse was invented by Douglas Engelbart in the 1960s and was made of wood.",
        "Dark mode on screens can reduce eye strain in low-light conditions.",
        "Cloud storage services like Google Drive or Dropbox allow file access from anywhere.",
        "Voice assistants like Siri and Alexa use natural language processing.",
        "Fiber optic cables transmit data as pulses of light, enabling high-speed internet.",
        "Lithium-ion batteries power most portable electronics today.",
        "Graphene is a single layer of carbon atoms, known for its strength and conductivity."
    ],
    "Automobile & Insurance": [
        "The first car was invented by Karl Benz in 1886 and had three wheels.",
        "Henry Ford's Model T, introduced in 1908, revolutionized car manufacturing with the assembly line.",
        "Electric vehicles (EVs) produce zero tailpipe emissions, reducing air pollution.",
        "Hybrid cars combine an internal combustion engine with an electric motor.",
        "Autonomous, or self-driving, cars use sensors and AI to navigate without human input.",
        "Anti-lock Braking Systems (ABS) help prevent wheels from locking up during hard braking.",
        "Airbags deploy rapidly in a collision to cushion occupants from impact.",
        "Comprehensive car insurance typically covers damage from non-collision events like theft or storms.",
        "Collision insurance covers damage to your car resulting from an accident with another vehicle or object.",
        "Liability insurance covers damages or injuries you cause to others in an accident.",
        "A vehicle's VIN (Vehicle Identification Number) is a unique 17-character code.",
        "Regular oil changes are crucial for maintaining engine health and longevity.",
        "Tire pressure affects fuel efficiency, handling, and tire wear.",
        "The anechoic chamber at Ford is one of the quietest places on Earth, used for testing car sounds.",
        "The Bugatti Veyron was one of the first production cars to exceed 250 mph.",
        "Formula 1 cars can generate enough downforce to theoretically drive upside down at high speeds.",
        "Regenerative braking in EVs and hybrids captures energy during deceleration to recharge the battery.",
        "All-wheel drive (AWD) systems provide power to all four wheels for improved traction.",
        "The catalytic converter in a car's exhaust system reduces harmful emissions.",
        "A car's crumple zones are designed to absorb impact energy in a crash.",
        "Telematics devices in cars can track driving behavior for insurance purposes (Usage-Based Insurance).",
        "The concept of a 'deductible' in insurance is the amount you pay out-of-pocket before coverage begins.",
        "Classic car insurance often has mileage restrictions and specific storage requirements.",
        "Aerodynamics plays a significant role in a car's fuel efficiency and stability at high speeds.",
        "The horsepower rating of an engine measures its power output.",
        "Torque is a measure of the engine's rotational force, important for acceleration.",
        "Dashboard warning lights indicate potential issues with various car systems.",
        "Blind-spot monitoring systems alert drivers to vehicles in their blind spots.",
        "Lane-keeping assist systems can help prevent unintentional lane departures.",
        "Adaptive cruise control maintains a set speed and distance from the vehicle ahead.",
        "The first speeding ticket was issued in 1896 in the UK to a driver going 8 mph in a 2 mph zone.",
        "The longest traffic jam in history reportedly stretched for 60 miles in China in 2010.",
        "Some countries require drivers to carry specific safety equipment, like a first-aid kit or warning triangle.",
        "Defensive driving techniques aim to anticipate and avoid potential hazards on the road.",
        "Ride-sharing insurance policies are often needed for drivers working for services like Uber or Lyft.",
        "Hydrogen fuel cell vehicles emit only water vapor as a byproduct.",
        "The 'new car smell' is largely due to volatile organic compounds (VOCs) outgassing from interior materials.",
        "Concept cars showcase futuristic designs and technologies that may appear in future production models.",
        "The term 'jaywalking' originated in the early 20th century to discourage pedestrians from crossing streets randomly.",
        "A car's differential allows the wheels to rotate at different speeds when turning.",
        "Synthetic oil generally offers better performance and protection than conventional oil.",
        "The color of a car can slightly affect its resale value.",
        "Parking assist systems can help drivers maneuver into parking spaces.",
        "The first car radio was offered by Chevrolet in 1922.",
        "Road rage incidents can lead to serious accidents and legal consequences.",
        "An insurance premium is the amount paid periodically to maintain coverage.",
        "No-fault insurance systems mean your own insurer pays for your injuries, regardless of who caused the accident.",
        "Gap insurance can cover the difference between a car's actual cash value and the amount owed on a loan.",
        "Checking your car's fluid levels regularly is part of basic maintenance.",
        "The world's first traffic light was installed in London in 1868, before cars were common."
    ],
    "Cryptocurrency & Web3": [
        "Bitcoin, created in 2009, was the first decentralized cryptocurrency.",
        "Blockchain is a distributed ledger technology that underlies most cryptocurrencies.",
        "A 'Satoshi' is the smallest unit of Bitcoin, equivalent to 0.00000001 BTC.",
        "Ethereum introduced smart contracts, which are self-executing contracts with predefined rules.",
        "Web3 refers to a vision of a new, decentralized iteration of the internet.",
        "NFTs (Non-Fungible Tokens) represent unique digital assets on a blockchain.",
        "A crypto wallet stores the private keys needed to access and manage digital assets.",
        "Mining is the process of validating transactions and adding them to a blockchain, often rewarded with new coins.",
        "Proof-of-Work (PoW) and Proof-of-Stake (PoS) are common consensus mechanisms in blockchain.",
        "Altcoins are cryptocurrencies other than Bitcoin.",
        "Decentralized Finance (DeFi) aims to recreate traditional financial systems using blockchain technology.",
        "A DAO (Decentralized Autonomous Organization) is an organization run by code and community governance.",
        "The halving event in Bitcoin reduces the reward for mining new blocks by half, occurring approximately every four years.",
        "Cold storage refers to keeping cryptocurrency private keys offline for enhanced security.",
        "Hot wallets are connected to the internet, offering convenience but potentially higher risk.",
        "Stablecoins are cryptocurrencies designed to maintain a stable value, often pegged to a fiat currency.",
        "Gas fees are transaction fees paid to miners or validators on a blockchain network.",
        "A whitepaper is a document that outlines the technology and goals of a cryptocurrency project.",
        "Initial Coin Offerings (ICOs) are a way for crypto projects to raise capital.",
        "Cryptography is fundamental to securing cryptocurrency transactions and wallets.",
        "The Metaverse is a concept of a persistent, shared, 3D virtual world or worlds.",
        "Layer 2 solutions aim to improve the scalability and speed of blockchain networks.",
        "A hard fork is a significant change to a blockchain's protocol that makes previously invalid blocks/transactions valid.",
        "A soft fork is a backward-compatible upgrade to a blockchain's software.",
        "Smart contract audits are security checks performed on the code of smart contracts.",
        "Digital scarcity, a key feature of some cryptocurrencies like Bitcoin, limits their total supply.",
        "Know Your Customer (KYC) procedures are often required by crypto exchanges to verify user identity.",
        "Hashing converts input data into a fixed-size string of characters, crucial for blockchain integrity.",
        "Decentralized Applications (dApps) run on a peer-to-peer network rather than a single computer.",
        "A blockchain explorer is a tool to view transactions and data on a blockchain.",
        "Market sentiment can heavily influence cryptocurrency prices.",
        "Yield farming is a DeFi strategy where users lend or stake crypto assets to earn rewards.",
        "Liquidity pools are collections of tokens locked in a smart contract, facilitating decentralized trading.",
        "Tokenomics refers to the economic model and characteristics of a cryptocurrency token.",
        "Sharding is a database partitioning technique used to improve blockchain scalability.",
        "Interoperability allows different blockchain networks to communicate and exchange data.",
        "Zero-Knowledge Proofs (ZKPs) allow one party to prove to another that a statement is true, without revealing any information beyond the validity of the statement itself.",
        "Play-to-Earn (P2E) games reward players with cryptocurrency or NFTs for playing.",
        "Oracles provide external data to smart contracts on the blockchain.",
        "Forking a project in Web3 means creating a copy of existing code to develop independently.",
        "Governance tokens give holders voting rights in a decentralized project.",
        "A private key is a secret code that allows access to your cryptocurrency; losing it means losing your funds.",
        "A public key is like a bank account number that you can share to receive funds.",
        "Immutable means that once data is written to a blockchain, it cannot be altered or deleted.",
        "Permissionless blockchains, like Bitcoin, allow anyone to participate.",
        "Permissioned blockchains restrict participation to authorized users.",
        "Soulbound Tokens (SBTs) are non-transferable NFTs representing aspects of a person's identity or achievements.",
        "Rug pull is a scam where developers abandon a crypto project and run away with investors' funds.",
        "FUD stands for Fear, Uncertainty, and Doubt, often spread to manipulate market sentiment.",
        "FOMO, or Fear Of Missing Out, can drive irrational investment decisions in volatile markets."
    ],
    "Real Estate & Property": [
        "Location is often considered the most critical factor in real estate value.",
        "A mortgage is a loan used to purchase or maintain a home, land, or other types of real estate.",
        "Equity in a home is the difference between its market value and the outstanding mortgage balance.",
        "A down payment is an upfront cash payment made when purchasing a property with a loan.",
        "Closing costs are fees paid at the end of a real estate transaction.",
        "A real estate agent helps clients buy, sell, or rent properties.",
        "The Multiple Listing Service (MLS) is a database used by real estate brokers to share property listings.",
        "Property taxes are ad valorem taxes assessed on real estate by local governments.",
        "Home insurance protects against damage to a property and liability for injuries.",
        "An appraisal is an expert's estimate of a property's market value.",
        "A home inspection assesses the condition of a property before purchase.",
        "Zoning laws dictate how land can be used in specific areas.",
        "A title search verifies legal ownership of a property and checks for any liens.",
        "Escrow is a neutral third party that holds funds and documents during a real estate transaction.",
        "Flipping houses involves buying properties, renovating them, and selling for a profit.",
        "Rental yield is a measure of the return on a rental property investment.",
        "A lease agreement is a contract outlining terms for renting a property.",
        "A landlord owns property and rents it to tenants.",
        "Property management involves overseeing the daily operations of real estate.",
        "REITs (Real Estate Investment Trusts) allow individuals to invest in income-producing real estate.",
        "Commercial real estate includes properties used for business purposes, like offices or retail spaces.",
        "Residential real estate includes properties used for housing.",
        "Capitalization rate (cap rate) is used to estimate an investor's potential return on a real estate investment.",
        "Market analysis helps determine a property's value based on comparable sales (comps).",
        "Curb appeal refers to the attractiveness of a property's exterior.",
        "Staging a home involves preparing it to look its best for potential buyers.",
        "An offer is a formal proposal to buy a property at a specific price and terms.",
        "A counteroffer is a response to an initial offer with modified terms.",
        "Contingencies in a purchase agreement are conditions that must be met for the sale to proceed.",
        "A lien is a legal claim against a property for an unpaid debt.",
        "Easements grant someone the right to use another person's land for a specific purpose.",
        "Building codes are regulations specifying standards for construction and safety.",
        "Gentrification is the process of renovating and improving a district so that it conforms to middle-class taste.",
        "Urban sprawl describes the expansion of low-density development outwards from cities.",
        "Sustainable building (green building) focuses on environmentally friendly design and construction.",
        "Property appreciation is the increase in a property's value over time.",
        "Depreciation is the decrease in a property's value, or a tax deduction for wear and tear.",
        "A seller's market occurs when demand exceeds supply, favoring sellers.",
        "A buyer's market occurs when supply exceeds demand, favoring buyers.",
        "Short sales occur when a homeowner sells their property for less than the amount owed on the mortgage.",
        "Foreclosure is a legal process by which a lender repossesses a property due to non-payment.",
        "Refinancing a mortgage involves replacing an existing loan with a new one, often for better terms.",
        "A home equity loan allows homeowners to borrow against their home's equity.",
        "Property deeds are legal documents that transfer ownership of real estate.",
        "Condominiums are individually owned units within a larger complex with shared common areas.",
        "A homeowners association (HOA) manages common areas and enforces rules in a community.",
        "Timeshares give individuals the right to use a property for a specific period each year.",
        "Land surveying determines the precise boundaries of a property.",
        "Air rights refer to the right to use or develop the space above a property.",
        "Subletting is when a tenant rents out their leased property to another person."
    ],
    "Legal & Law": [
        "Ignorance of the law is generally not a valid defense in court.",
        "The burden of proof in a criminal case rests on the prosecution to prove guilt beyond a reasonable doubt.",
        "In civil cases, the burden of proof is typically a preponderance of the evidence.",
        "A contract is a legally binding agreement between two or more parties.",
        "Common law is derived from judicial decisions rather than statutes.",
        "Statutory law is written law passed by a legislative body.",
        "A tort is a civil wrong that causes harm or loss, leading to legal liability.",
        "Negligence is a failure to exercise reasonable care, resulting in harm.",
        "Intellectual property law protects creations of the mind, like inventions, literary works, and designs.",
        "A patent grants an inventor exclusive rights to their invention for a set period.",
        "Copyright protects original works of authorship, such as books, music, and software.",
        "A trademark is a symbol, word, or phrase legally registered to represent a company or product.",
        "Habeas corpus is a legal recourse requiring a person under arrest to be brought before a judge.",
        "The Miranda warning informs suspects of their constitutional rights upon arrest in the U.S.",
        "A subpoena is a legal order compelling someone to attend court or produce evidence.",
        "Due process ensures fair treatment through the normal judicial system.",
        "A statute of limitations sets a maximum time after an event within which legal proceedings may be initiated.",
        "Pro bono work is legal service provided voluntarily and without payment.",
        "A lawyer (or attorney) is a person licensed to practice law.",
        "A paralegal assists lawyers by performing specifically delegated substantive legal work.",
        "Mediation is a form of alternative dispute resolution where a neutral third party helps parties reach an agreement.",
        "Arbitration is another form of alternative dispute resolution where a neutral third party makes a binding decision.",
        "A plaintiff is the party who initiates a lawsuit.",
        "A defendant is the party against whom a lawsuit is brought.",
        "A will is a legal document outlining how a person's assets should be distributed after death.",
        "Probate is the legal process of administering a deceased person's estate.",
        "Power of attorney grants someone the authority to act on another person's behalf in legal or financial matters.",
        "A notary public is an official authorized to witness signatures and certify documents.",
        "Perjury is the offense of willfully telling an untruth in court after having taken an oath.",
        "Contempt of court is behavior that disobeys or disrespects a court's authority.",
        "Case law is law based on previous judicial decisions.",
        "Precedent refers to a legal principle established by a court decision that guides future similar cases.",
        "A felony is a serious crime, often punishable by imprisonment for more than a year.",
        "A misdemeanor is a less serious crime, typically punishable by fines or shorter jail terms.",
        "An injunction is a court order requiring a person to do or cease doing a specific action.",
        "Liability refers to legal responsibility for one's acts or omissions.",
        "Defamation is a false statement that harms someone's reputation (libel if written, slander if spoken).",
        "Public domain refers to creative works not protected by intellectual property rights.",
        "Adversarial system of justice, used in common law countries, involves two opposing sides presenting their cases.",
        "Inquisitorial system, common in civil law countries, involves a judge actively investigating facts.",
        "A class action lawsuit is filed by a group of people who have suffered similar harm.",
        "Small claims court handles minor civil disputes without the need for extensive legal representation.",
        "Legal aid provides assistance to people otherwise unable to afford legal representation.",
        "Affidavit is a written statement confirmed by oath or affirmation, for use as evidence in court.",
        "Eminent domain is the right of a government to take private property for public use, with compensation.",
        "Jurisprudence is the theory or philosophy of law.",
        "International law governs relationships between sovereign states.",
        "Conflict of interest occurs when an individual's personal interests could compromise their professional judgment.",
        "Double jeopardy is a procedural defense that prevents an accused person from being tried again on the same charges following a valid acquittal or conviction.",
        "Plea bargaining is an agreement in a criminal case between the prosecutor and defendant whereby the defendant pleads guilty to a lesser charge in exchange for a more lenient sentence."
    ],
    "Business & Startups": [
        "A business plan is a formal document outlining a company's goals and strategies.",
        "Startups are young companies founded to develop a unique product or service and bring it to market.",
        "Venture capital firms invest in startups with high growth potential in exchange for equity.",
        "Angel investors are wealthy individuals who provide capital for startups.",
        "Bootstrapping means funding a startup using personal finances or operating revenue.",
        "A Unique Selling Proposition (USP) differentiates a product or service from competitors.",
        "Market research involves gathering information about target customers and market trends.",
        "A SWOT analysis evaluates a company's Strengths, Weaknesses, Opportunities, and Threats.",
        "Networking is crucial for building relationships and finding business opportunities.",
        "Branding is the process of creating a distinct identity for a business.",
        "A Minimum Viable Product (MVP) is a version of a new product with just enough features to satisfy early customers.",
        "Scalability refers to a business's ability to grow and manage increased demand.",
        "A pitch deck is a brief presentation used to provide an overview of a business plan to potential investors.",
        "Customer acquisition cost (CAC) is the expense of convincing a potential customer to buy a product or service.",
        "Lifetime Value (LTV) of a customer predicts the net profit attributed to the entire future relationship with a customer.",
        "Burn rate is the rate at which a new company is spending its venture capital to finance overhead before generating positive cash flow.",
        "A pivot is a significant change in a startup's business model or strategy.",
        "Intellectual Property (IP) includes patents, trademarks, and copyrights that protect a company's innovations.",
        "A sole proprietorship is a business owned and run by one person with no legal distinction between owner and business.",
        "A partnership is a business owned by two or more individuals.",
        "A Limited Liability Company (LLC) combines the pass-through taxation of a partnership or sole proprietorship with the limited liability of a corporation.",
        "A corporation is a legal entity separate from its owners, offering limited liability.",
        "Cash flow is the net amount of cash and cash-equivalents being transferred into and out of a business.",
        "Profit margin is the percentage of revenue that remains after all expenses have been deducted.",
        "Key Performance Indicators (KPIs) are measurable values that demonstrate how effectively a company is achieving key business objectives.",
        "Lean startup methodology focuses on rapid prototyping and iterative development based on customer feedback.",
        "Agile methodology is an iterative approach to project management and software development.",
        "Outsourcing involves hiring external parties to perform services or create goods traditionally performed in-house.",
        "Supply chain management oversees the flow of goods and services from raw materials to end consumers.",
        "B2B (Business-to-Business) refers to commerce transactions between businesses.",
        "B2C (Business-to-Consumer) refers to commerce transactions between a business and individual consumers.",
        "Digital marketing utilizes online channels to promote products and services.",
        "Search Engine Optimization (SEO) aims to improve a website's visibility in search engine results.",
        "Content marketing involves creating and distributing valuable content to attract and retain a target audience.",
        "Social media marketing uses social platforms to connect with audiences and build brand awareness.",
        "A business incubator provides support, resources, and mentorship to early-stage startups.",
        "An accelerator program offers mentorship, funding, and resources to startups in exchange for equity, typically over a fixed period.",
        "Franchising allows individuals to operate a business under an established brand name.",
        "Corporate Social Responsibility (CSR) is a business model that helps a company be socially accountable.",
        "Mergers and Acquisitions (M&A) involve the consolidation of companies or assets.",
        "Due diligence is an investigation or audit of a potential investment or product prior to signing a contract.",
        "An exit strategy is a plan for an entrepreneur to sell their ownership stake in a company.",
        "A non-disclosure agreement (NDA) is a legal contract that outlines confidential material or knowledge.",
        "Human Resources (HR) manages employee relations, recruitment, and benefits.",
        "Company culture refers to the shared values, beliefs, and practices within an organization.",
        "E-commerce is the buying and selling of goods or services over the internet.",
        "Subscription models offer products or services on a recurring payment basis.",
        "Freemium is a business model offering basic services for free, with charges for premium features.",
        "Disruptive innovation creates a new market and value network, eventually displacing established market leaders.",
        "Globalization is the process of interaction and integration among people, companies, and governments worldwide."
    ],
    "Travel & Visa Info": [
        "A passport is an official document issued by a government, certifying the holder's identity and citizenship for international travel.",
        "A visa is an official authorization appended to a passport, permitting entry into and travel within a particular country.",
        "The Schengen Area comprises 27 European countries that have abolished passport and other types of border control at their mutual borders.",
        "Many countries require your passport to be valid for at least six months beyond your intended stay.",
        "Travel insurance can cover medical emergencies, trip cancellations, and lost luggage.",
        "An E-visa (electronic visa) is obtained online and linked to your passport number.",
        "Visa on Arrival (VOA) means you can obtain your visa when you arrive at your destination country's port of entry.",
        "Some countries offer visa-free travel to citizens of certain nations for short stays.",
        "A tourist visa is for leisure travel, while a business visa is for work-related activities.",
        "A student visa allows individuals to study abroad at an educational institution.",
        "Work visas or permits are required for employment in a foreign country.",
        "Customs regulations dictate what goods you can bring into a country.",
        "Duty-free shops at airports sell goods without certain local import taxes.",
        "It's advisable to check travel advisories issued by your government before visiting a foreign country.",
        "Booking flights and accommodations in advance can often save money.",
        "Currency exchange rates fluctuate, affecting the cost of travel.",
        "Using a credit card with no foreign transaction fees can reduce travel expenses.",
        "Learning basic phrases in the local language can enhance your travel experience.",
        "Packing light can make travel more convenient and avoid excess baggage fees.",
        "Always inform your bank about your travel plans to avoid issues with card usage abroad.",
        "An International Driving Permit (IDP) may be required to drive in some foreign countries.",
        "Research local customs and etiquette to show respect for the culture you are visiting.",
        "Vaccinations may be recommended or required for travel to certain destinations.",
        "Keep copies of important documents like your passport and visa separate from the originals.",
        "Many airports offer free Wi-Fi, but a local SIM card or international roaming plan can be useful.",
        "Hostels offer budget-friendly accommodation, often with communal spaces.",
        "Boutique hotels are typically smaller, stylish hotels with a unique character.",
        "Itinerary planning helps organize your trip and make the most of your time.",
        "Solo travel can be a rewarding experience for personal growth and independence.",
        "Group tours offer a structured way to see a destination with a guide and fellow travelers.",
        "Travel adapters and converters are necessary for using electronics in countries with different power outlets.",
        "Jet lag is a temporary sleep disorder caused by rapid travel across multiple time zones.",
        "Carry-on luggage restrictions vary by airline, so check before you fly.",
        "Always declare items as required by customs to avoid penalties.",
        "Travel scams can target unsuspecting tourists; be aware and cautious.",
        "Using public transportation can be an affordable way to explore a city.",
        "Travel guidebooks and apps can provide valuable information about destinations.",
        "Respect wildlife and natural environments when traveling.",
        "Some countries have strict laws regarding photography of government buildings or military installations.",
        "Travel health clinics can provide advice and necessary medications for your trip.",
        "A transit visa may be required if you are passing through a country on your way to another destination.",
        "Check visa requirements well in advance of your trip, as processing times can vary.",
        "Overstaying a visa can result in fines, deportation, and future travel restrictions.",
        "A 'digital nomad' visa allows remote workers to live and work in a foreign country for an extended period.",
        "Round-the-world tickets allow for travel to multiple destinations across different continents on one ticket.",
        "Travel blogs and forums can offer personal insights and tips from fellow travelers.",
        "Ensure your mobile phone is unlocked if you plan to use a local SIM card.",
        "Familiarize yourself with emergency contact numbers in your destination country.",
        "Consider the environmental impact of your travel choices and opt for sustainable options where possible.",
        "Travel advisories can change quickly, so stay updated on the latest information for your destination."
    ]
};
const generateFacts = ()=>{
    const facts = [];
    const factsPerCategory = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TOTAL_FACTS"] / factCategories.length; // Should be 50
    for(let i = 1; i <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TOTAL_FACTS"]; i++){
        const categoryIndex = (i - 1) % factCategories.length;
        const category = factCategories[categoryIndex];
        // This calculates which fact number (0-49) within the category to pick.
        // Example: Fact ID 1 -> category 0, factIndex 0
        // Fact ID 11 -> category 0, factIndex 1
        // Fact ID 10 -> category 9, factIndex 0
        const factInCategoryIndex = Math.floor((i - 1) / factCategories.length);
        const factText = factsDataSource[category]?.[factInCategoryIndex % factsPerCategory] || `Default fact for ${category} if specific one is missing. Index: ${factInCategoryIndex}`;
        facts.push({
            id: i,
            text: factText,
            category: category
        });
    }
    return facts;
};
const allFacts = generateFacts();
const getFactById = (id)=>{
    if (id < 1 || id > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TOTAL_FACTS"]) {
        return undefined;
    }
    // The allFacts array is 0-indexed, but fact IDs are 1-indexed.
    // However, generateFacts creates them with matching IDs to their intended usage.
    // So, direct find by ID is fine if allFacts is generated correctly.
    return allFacts.find((fact)=>fact.id === id);
};
const getAllFacts = ()=>{
    return allFacts;
};
}}),
"[project]/src/lib/ads.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAdsForPage": (()=>getAdsForPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
;
const adCategories = [
    "Shopping Deals",
    "Tech Gadgets",
    "Financial Services",
    "Health Products",
    "Online Courses",
    "Travel Packages",
    "Automotive Offers",
    "Home Improvement",
    "Subscription Boxes",
    "Gaming Gear",
    "Fashion Trends",
    "Eco Friendly",
    "Pet Supplies",
    "Software Tools",
    "Fitness Apps"
];
const getAdsForPage = (pageId)=>{
    const ads = [];
    const baseAdIndex = (pageId - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ADS_PER_PAGE"];
    const adSizes = [
        {
            width: 300,
            height: 250
        },
        {
            width: 160,
            height: 600
        },
        {
            width: 728,
            height: 90
        },
        {
            width: 320,
            height: 100
        },
        {
            width: 250,
            height: 250
        },
        {
            width: 300,
            height: 600
        },
        {
            width: 120,
            height: 240
        },
        {
            width: 468,
            height: 60
        },
        {
            width: 200,
            height: 200
        }
    ];
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ADS_PER_PAGE"]; i++){
        const uniqueAdId = baseAdIndex + i + 1;
        const category = adCategories[uniqueAdId % adCategories.length];
        const size = adSizes[i % adSizes.length];
        const adText = `Ad #${uniqueAdId}: ${category}`;
        ads.push({
            id: `page${pageId}-slot${i + 1}`,
            pageId,
            slotIndex: i + 1,
            title: adText,
            imageUrl: `https://placehold.co/${size.width}x${size.height}.png?text=Ad+${uniqueAdId}`,
            linkUrl: '#',
            size: size,
            aiHint: `${category.split(' ')[0].toLowerCase()} advertisement` // e.g. "shopping advertisement"
        });
    }
    return ads;
};
}}),
"[project]/src/components/ads/AdComponent.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const AdComponent = ({ ad, className })=>{
    const adSize = ad.size || {
        width: 200,
        height: 200
    }; // Default size
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("w-full h-full flex flex-col items-center justify-center text-center overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg border border-border/50", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-2 sm:p-3 flex flex-col items-center justify-center w-full h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-3/4 mb-1 sm:mb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: ad.imageUrl,
                        alt: ad.title,
                        fill: true,
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                        className: "object-contain rounded-md",
                        "data-ai-hint": ad.aiHint
                    }, void 0, false, {
                        fileName: "[project]/src/components/ads/AdComponent.tsx",
                        lineNumber: 18,
                        columnNumber: 12
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ads/AdComponent.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs sm:text-sm font-medium text-foreground/80 truncate w-full px-1",
                    children: ad.title
                }, void 0, false, {
                    fileName: "[project]/src/components/ads/AdComponent.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ads/AdComponent.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ads/AdComponent.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AdComponent;
}}),
"[project]/src/app/facts/[factId]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FactPage),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$facts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/facts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ads.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ads$2f$AdComponent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ads/AdComponent.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-rsc] (ecmascript) <export default as ArrowRight>");
;
;
;
;
;
;
;
;
;
;
function FactPage({ params }) {
    const factId = parseInt(params.factId, 10);
    if (isNaN(factId) || factId < 1 || factId > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TOTAL_FACTS"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const fact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$facts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFactById"])(factId);
    const ads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdsForPage"])(factId);
    if (!fact) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const nextFactId = factId + 1;
    const hasNextFact = nextFactId <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TOTAL_FACTS"];
    const adSpots = [
        {
            ad: ads[0],
            className: "col-span-2 md:col-span-1 row-span-1"
        },
        {
            ad: ads[1],
            className: "col-span-2 md:col-span-1 row-span-1"
        },
        {
            ad: ads[2],
            className: "col-span-4 md:col-span-2 row-span-1"
        },
        {
            ad: ads[3],
            className: "col-span-2 md:col-span-1 row-span-2 md:row-span-1"
        },
        {
            ad: ads[4],
            className: "col-span-2 md:col-span-1 row-span-2 md:row-span-1 md:col-start-4"
        },
        {
            ad: ads[5],
            className: "col-span-2 md:col-span-1 row-span-2 md:row-span-1 md:row-start-3"
        },
        {
            ad: ads[6],
            className: "col-span-2 md:col-span-1 row-span-2 md:row-span-1 md:col-start-4 md:row-start-3"
        },
        {
            ad: ads[7],
            className: "col-span-2 md:col-span-2 row-span-1 md:col-start-1 md:row-start-4"
        },
        {
            ad: ads[8],
            className: "col-span-2 md:col-span-2 row-span-1 md:col-start-3 md:row-start-4"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex-grow p-3 sm:p-4 md:p-6 fade-in-on-load",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-4 grid-rows-4 gap-3 sm:gap-4 md:gap-5 w-full h-[calc(100vh-120px)] sm:h-[calc(100vh-140px)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                    className: "col-span-4 row-span-2 md:col-start-2 md:col-span-2 md:row-start-2 md:row-span-2 flex flex-col items-center justify-center text-center shadow-2xl z-10 bg-card/95 backdrop-blur-md p-4 sm:p-6 md:p-8 border border-primary/20 rounded-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "flex flex-col items-center justify-center w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-headline text-xl sm:text-2xl md:text-3xl text-primary mb-3 sm:mb-4",
                                children: [
                                    "Fact #",
                                    factId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/facts/[factId]/page.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-body text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 sm:mb-10 md:mb-12 leading-tight text-foreground/90",
                                children: fact.text
                            }, void 0, false, {
                                fileName: "[project]/src/app/facts/[factId]/page.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            hasNextFact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/facts/${nextFactId}`,
                                passHref: true,
                                legacyBehavior: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buttonVariants"])({
                                        size: "lg"
                                    })} bg-accent text-accent-foreground hover:bg-accent/90 font-headline text-md sm:text-lg py-3 px-6 sm:py-3 sm:px-8 transition-transform hover:scale-105 shadow-lg rounded-lg`,
                                    children: [
                                        "NEXT FACT ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "ml-2 h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/facts/[factId]/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/facts/[factId]/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/facts/[factId]/page.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                size: "lg",
                                disabled: true,
                                className: "font-headline text-md sm:text-lg py-3 px-6 sm:py-3 sm:px-8 shadow-md rounded-lg",
                                children: "END OF FACTS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/facts/[factId]/page.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/facts/[factId]/page.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/facts/[factId]/page.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                adSpots.map((spot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: spot.className,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ads$2f$AdComponent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            ad: spot.ad,
                            className: "w-full h-full rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/src/app/facts/[factId]/page.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    }, spot.ad.id, false, {
                        fileName: "[project]/src/app/facts/[factId]/page.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/facts/[factId]/page.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/facts/[factId]/page.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
async function generateStaticParams() {
    const paths = Array.from({
        length: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TOTAL_FACTS"]
    }, (_, i)=>({
            factId: (i + 1).toString()
        }));
    return paths;
}
}}),
"[project]/src/app/facts/[factId]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/facts/[factId]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_822285d7._.js.map