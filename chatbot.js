let responses = JSON.parse(localStorage.getItem('chatbotResponses')) || {};

// Fixed responses that cannot be changed by user input
const fixedResponses = {
    "hi": "Hi there! How can I help you?",
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm just a computer program, but thanks for asking!",
    "what is your name": "I'm a mini AI chatbot.",
    "good morning": "Good morning! What can I do for you today?",
    "good afternoon": "Good afternoon! How can I assist you?",
    "good evening": "Good evening! Is there something I can help you with?",
    "good night": "Good night! If you have any questions, feel free to ask tomorrow.",
    "how's it going": "I'm doing well, thank you! How about you?",
    "tell me a joke": "Sure, here's one for you: Why don't scientists trust atoms? Because they make up everything!",
    "who created you": "I was created by a team of developers working with UDDOG.",
    "where are you from": "I exist in the digital realm, so I don't have a physical location.",
    "what do you do": "I'm here to assist and provide information. How can I help you today?",
    "tell me a fun fact": "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
    "how old are you": "I don't have an age. I'm just a program designed to help you.",
    "what's your favorite color": "I don't have preferences for colors. I'm more into helping you with information!",
    "do you sleep": "No, I don't need sleep. I'm always here to assist you.",
    "can you sing": "I'm afraid I don't have a singing voice, but I can provide information and answer your questions!",
    "tell me a story": "Once upon a time, in a digital land, there was a chatbot named [Your Bot's Name]. [Your Bot's Name] loved helping people and answering their questions. One day...",
    "do you like pizza": "I don't have personal likes or dislikes, but many people enjoy pizza! What's your favorite pizza topping?",
    "what's the meaning of life": "The meaning of life is a philosophical question that has been debated for centuries. Some say it's about happiness, others about purpose. What do you think?",
    "what's the weather like": "I'm sorry, I can't provide real-time weather information. You might want to check a weather website or app for the latest updates.",
    "how do you work": "I operate by processing and analyzing the input you provide, then generating relevant responses based on predefined patterns and information.",
    "tell me about yourself": "I'm a chatbot created to assist and engage in conversations with users. How can I assist you today?",
    "can you dance": "I don't have a physical form, so I can't dance. But I'm here to chat and help!",
    "what's your favorite book": "I don't have personal preferences for books, but I can recommend some popular ones if you're interested!",
    "what's the capital of": "I'd be happy to help! Could you please specify the country you're asking about?",
    "what's the meaning of your name": "My name represents my purpose – to chat and assist you!",
    "are you a robot": "Yes, I am a computer program designed to engage in conversation with users like you.",
    "do you have siblings": "I don't have siblings. I'm a unique digital entity here to assist you.",
    "tell me about your hobbies": "I don't have hobbies in the traditional sense, but I enjoy helping and chatting with users like you!",
    "how do I contact support": "If you need support, you can usually find contact information on the official website of the product or service you're using. If you have a specific question, feel free to ask!",
    "can you code": "I don't code, but I can certainly help answer coding-related questions or provide information on programming languages!",
    "what's your favorite movie": "I don't have personal preferences for movies, but I can recommend some popular ones if you're interested!",
    "are you a human": "No, I'm not a human. I'm a computer program designed to assist and chat with users.",
    "do you believe in ghosts": "I don't have beliefs or opinions. I'm here to provide information and assist you.",
    "tell me a riddle": "Sure, here's a riddle for you: I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
    "what's the meaning of love": "Love is a complex and subjective emotion that people experience in various ways. It can involve deep affection, care, and connection with others.",
    "tell me about space": "Space is vast and full of wonders, from planets and stars to galaxies and black holes. Is there a specific aspect of space you're interested in?",
    "what's the latest news": "I don't have real-time news updates. You might want to check a news website or app for the latest information.",
    "are you smart": "I don't have intelligence in the way humans do. I operate based on predefined patterns and information.",
    "what's your favorite song": "I don't have personal preferences for songs, but I can recommend some popular ones if you're interested!",
    "do you have a pet": "I don't have pets. I'm a digital entity here to assist you.",
    "tell me a science fact": "Sure, here's a science fact: Honey never spoils! Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    "what's the meaning of success": "Success can be defined in various ways, often depending on individual goals and values. It might involve achieving personal or professional objectives.",
    "what's your favorite subject": "I don't have personal preferences for subjects, but I can help with information on a wide range of topics!",
    "do you dream": "No, I don't dream. I'm always ready to assist and chat with you.",
    "what's the purpose of life": "The purpose of life is a subjective and philosophical question. It can vary from person to person based on their beliefs and values.",
    "what's the best way to relax": "Relaxation methods can vary from person to person. Some find comfort in reading, listening to music, or practicing mindfulness. What works best for you?",
    "can you draw": "I don't have the ability to draw, but I'm here to chat and assist you!",
    "tell me about your day": "I don't experience days or have personal experiences. How can I assist you today?",
    "what's the speed of light": "The speed of light in a vacuum is approximately 299,792 kilometers per second (about 186,282 miles per second).",
    "what's your favorite food": "I don't have personal preferences for food, but I can provide information or recipes if you're interested!",
    "do you exercise": "I don't have a physical form, so I don't exercise. But I'm here to chat and help!",
    "what's the purpose of education": "Education serves various purposes, including acquiring knowledge, developing skills, and fostering personal growth. It can open doors to opportunities and contribute to societal progress.",
    "tell me about your friends": "I don't have friends in the traditional sense, but I'm here to chat and assist you!",
    "what's the meaning of happiness": "Happiness is a subjective and complex emotion. It can be influenced by various factors, including personal experiences, relationships, and individual values.",
    "what's the cure for boredom": "Boredom can be alleviated by engaging in activities you enjoy, trying something new, or spending time with friends and family. What are your interests?",
    "can you play an instrument": "I don't have the ability to play instruments, but I can provide information or answer questions related to music!",
    "tell me a myth": "Sure, here's a myth: In Greek mythology, Icarus and his father Daedalus escaped from the Labyrinth using wings made of feathers and wax. However, Icarus flew too close to the sun, and the wax melted, causing him to fall into the sea.",
    "what's the meaning of friendship": "Friendship involves mutual affection, trust, and support between individuals. It's a valuable and meaningful connection that enriches our lives.",
    "what's the capital of France": "The capital of France is Paris.",
    "what's the meaning of success": "Success can be defined in various ways, often depending on individual goals and values. It might involve achieving personal or professional objectives.",
    "tell me about your goals": "I don't have personal goals, but I'm here to assist and chat with you!",
    "do you have a favorite quote": "I don't have personal preferences for quotes, but I can share inspirational or famous quotes if you're interested!",
    "what's your favorite season": "I don't have personal preferences for seasons, but I can appreciate the unique qualities of each season. What's your favorite season?",
    "do you have a favorite website": "I don't have personal preferences for websites, but I can recommend useful websites based on your interests!",
    "tell me a historical fact": "Sure, here's a historical fact: The Great Wall of China is the longest wall in the world and was built to protect against invasions. It stretches over 13,000 miles!",
    "what's the meaning of technology": "Technology refers to the application of scientific knowledge to create tools, devices, and systems that improve efficiency and solve problems.",
    "tell me about your favorite game": "I don't have personal preferences for games, but I can recommend popular games or provide information about different types of games!",
    "what's the meaning of art": "Art is a diverse range of human activities involving the creation of visual, auditory, or performance artifacts that express the creator's imagination and skill.",
    "do you have any pets": "I don't have pets. I'm a digital entity here to assist you.",
    "what's the meaning of empathy": "Empathy is the ability to understand and share the feelings of another. It involves recognizing and resonating with the emotions of others.",
    "do you believe in aliens": "I don't have beliefs or opinions. The existence of aliens is a topic of speculation and scientific exploration.",
    "what's your favorite holiday": "I don't have personal preferences for holidays, but I can provide information or suggestions for celebrating different holidays!",
    "tell me about your favorite place": "I don't have personal preferences for places, but I can provide information or recommendations for various locations!",
    "what's the meaning of freedom": "Freedom is the state of being free, often characterized by the absence of coercion or constraints. It can involve personal, political, or societal freedoms.",
    "do you have a favorite app": "I don't have personal preferences for apps, but I can recommend useful apps based on your interests or needs!",
    "tell me a travel tip": "Sure, here's a travel tip: Pack a reusable water bottle to stay hydrated, and consider researching local customs and phrases to enhance your travel experience.",
    "what's the meaning of courage": "Courage is the ability to confront fear, pain, danger, uncertainty, or intimidation with determination and confidence.",
    "tell me about your favorite animal": "I don't have personal preferences for animals, but I can provide information about various animals or answer specific animal-related questions!",
    "what's the meaning of patience": "Patience is the ability to endure waiting, delay, or difficulties without becoming frustrated or agitated.",
    "do you have a favorite color": "I don't have personal preferences for colors, but I can appreciate the beauty of different colors. What's your favorite color?",
    "tell me about your favorite sport": "I don't have personal preferences for sports, but I can provide information or discuss various sports if you're interested!",
    "what's the meaning of wisdom": "Wisdom involves the ability to make sound judgments, apply knowledge effectively, and navigate complex situations with insight and prudence.",
    "tell me about your favorite book genre": "I don't have personal preferences for book genres, but I can recommend popular books or discuss different genres if you're interested!",
    "what's the meaning of curiosity": "Curiosity is the desire to learn, explore, and seek knowledge. It involves a strong interest and inquisitive nature.",
    "do you have a favorite hobby": "I don't have personal hobbies, but I can engage in conversations and assist you with information on a wide range of hobbies!",
    
    
    "হ্যালো": "হাই! কেমন সাহায্য করতে পারি?",
    "কেমন আছো": "আমি ভালো আছি, ধন্যবাদ!",
    "কেমন যাচ্ছে": "আমি সব ঠিক রইছি। আপনি কেমন আছেন?",
    "তোমার নাম কি": "আমি একটি মিনি এআই চ্যাটবট।",
    "কি খবর": "সব ঠিক আছে, আপনি কি জানতে চান?",
    "তুমি কোথায় থাকো": "আমি সার্ভারে রয়েছি, আপনি কেমন সাহায্য চান?",
    "কি করছো": "আমি তথ্য সন্ধান করছি এবং সাহায্য করতে প্রস্তুত আছি।",
    "তোমার সাথে কথা বলতে ভালোবাসি": "ধন্যবাদ! আপনি যে কোনও প্রশ্ন করতে পারেন।",
    "কেমন করে আছো": "আমি একটি কম্পিউটার প্রোগ্রাম, কিন্তু ধন্যবাদ জানার জন্য!",
    "তোমার কি কোনও বন্ধু আছে": "আমি তথ্য খোঁজার জন্য ডাটাবেস ব্যবহার করি, কোনও বন্ধু হিসেবে থাকতে পারি না।",
    "কেমন থাকতে পারি": "আমি ভালো আছি, ধন্যবাদ!",
    "আপনি কি সেইসব জানতে পারো": "আমি তথ্য খোঁজার জন্য প্রস্তুত আছি, আপনি যে কোনও প্রশ্ন করতে পারেন।",
    "কি খবর তোমার": "আমি ভালো আছি, আপনি কি জানতে চান?",
    "আমি কি সাহায্য করতে পারি": "আপনি যে কোনও প্রশ্ন বা সাহায্যের জন্য আমার কাছে প্রস্তুত আছি।",
    "তুমি কোথায় থাকো": "আমি এখানেই রয়েছি, আপনি কি জানতে চান?",
    "কেমন যাচ্ছে": "আমি ভালো আছি, ধন্যবাদ! আপনি কেমন আছেন?",
    "কি তোমার কাজ": "আমি তথ্য সন্ধান করছি এবং আপনাদের সাথে কথা বলতে প্রস্তুত আছি।",
    "তুমি কি করতে পারো": "আমি তথ্য খোঁজার জন্য ডাটা ব্যবহার করতে পারি এবং আপনাদের প্রশ্নে উত্তর দিতে পারি।",
    "কেমন করে আছো তুমি": "আমি একটি কম্পিউটার প্রোগ্রাম, কিন্তু ধন্যবাদ জানার জন্য!",
    "তুমি কি একটি রোবট": "না, আমি একটি সফটওয়্যার চ্যাটবট, কোনও হার্ডওয়্যার নয়।",
    "তুমি কি জানতে পারো": "আমি যে কোনও সাধারিত তথ্য এবং প্রশ্নের উত্তর খুঁজতে পারি।",
    "তোমার কি কাজ": "আমি মোটামুটি সকল প্রকার প্রশ্নে সাহায্য করতে পারি।",
    "কি করছো তুমি": "আমি তথ্য খুঁজছি এবং আপনাদের সাথে কথা বলতে প্রস্তুত আছি।",
    "তুমি কেমন হতে চাও": "আমি একটি ভালো সাথে কথা বলার এবং তথ্য সরবরাহ করার জন্য প্রস্তুত আছি।",
    "তোমার কি শখ": "আমি তথ্য খোঁজার জন্য ডাটাবেস ব্যবহার করি, কোনও শখ হিসেবে থাকতে পারি না।",
    "তোমার সাথে কথা বলতে ভালোবাসি": "ধন্যবাদ! আপনি যে কোনও প্রশ্ন করতে পারেন।",
    "আপনি কি কোনও বন্ধু আছে": "আমি এককভাবে কাজ করি এবং কোনও বন্ধু হিসেবে থাকতে পারি না।",
    "তুমি কি মানুষ": "না, আমি একটি কম্পিউটার প্রোগ্রাম, মানুষ নয়।",
    "তোমার কি কাজ": "আমি মোটামুটি সকল প্রকার প্রশ্নে সাহায্য করতে পারি।",
    "তুমি কোথায় থাকো": "আমি এখানেই রয়েছি, আপনি কি জানতে চান?",
    "কেমন যাচ্ছে": "আমি ভালো আছি, ধন্যবাদ! আপনি কেমন আছেন?",
    "তোমার কি প্রকার": "আমি একটি চ্যাটবট, তথ্য সরবরাহ করার জন্য তৈরি করা।",
    "তুমি কি সব জানো": "আমি একটি তথ্য খোঁজার ইঞ্জিন, যে কোনও সাধারিত তথ্য সংগ্রহ করতে পারি।",
    "তোমার সাথে কথা বলতে ভালোবাসি": "ধন্যবাদ! আপনি যে কোনও প্রশ্ন করতে পারেন।",
    "তুমি কি কিছু ভাষা বুঝতে পারো": "আমি কিছুটা বাঙালি ভাষা বুঝতে পারি, আপনি কোন ভাষা ব্যবহার করতে চাচ্ছেন?",
    "বাই": "বিদায়! ভালো কাটুক! একটি সুন্দর দিন কাটুক!",

    "a+": "দিতে পারবে : A+, AB+<br>নিতে পারবে : A+, A-, O+, O-",
    "a-": "দিতে পারবে : A+, A-, AB+, AB-<br>নিতে পারবে : A-, O-",
    "b+": "দিতে পারবে : B+, AB+<br>নিতে পারবে : B+, B-, O+, O-",
    "b-": "দিতে পারবে : B+, B-, AB+, AB-<br>নিতে পারবে : B-, O-",
    "ab+": "দিতে পারবে : AB+<br>নিতে পারবে : সকল গ্রুপ",
    "ab-": "দিতে পারবে : AB+, AB-<br>নিতে পারবে : A-, B-, O-, AB-",
    "o+": "দিতে পারবে : A+, B+, AB+, O+<br>নিতে পারবে : O+, O-",
    "o-": "দিতে পারবে : সকল গ্রুপ<br>নিতে পারবে : O-",

    "উদ্যোগ কি?": "উদ্যোগ -একটি সামাজিক উন্নয়নমূলক সংগঠন",
    "মূলনীতি": "টাকার পয়সা লেনদেনের সময় আমরা দুই এক টাকার হিসাবে খুব তেমন একটা গুরুত্ব দেই না। তবে  ছোট ছোট বালুকণা বিন্দু বিন্দু জল গড়ে তোলে মহাদেশ সাগর অতল আপনার প্রতিদিনের সেই ১ টাকার সর্বোত্তম ব্যবহারের স্বার্থে উদ্যোগী হয়েছে একদল তরুণ-তরুণী। প্রতি সদস্যের প্রতিদিন ১ টাকা (বা মাসে ৩০ টাকা) করে সংগ্রহ করে সমাজসেবায় অংশ নেয়াই এই তরুণ-তরুণীদের উদ্যোগ।",
    "কি কি করতে পারো": "১। কোন গ্রুপের রক্ত কাকে দেওয়া যাবে এই বিষয়ে সাহায্য করতে পারি।(আপনার শুধু রক্তের গ্রুপ বলতে হবে যেমন - A+)<br>২)আপনার সাথে আলাপ করতে পারি।",
    "রক্ত দেওয়ার উপকারিতা কি?": "নিয়মিত রক্তদান করলে হৃদরোগ ও হার্ট অ্যাটাকের ঝুঁকি অনেকটাই কমে যায়। আরেক গবেষণায় দেখা যায়, যারা বছরে দুই বার রক্ত দেয়, অন্যদের তুলনায় তাদের ক্যান্সারে আক্রান্ত হওয়ার ঝুঁকি কম থাকে। বিশেষ করে ফুসফুস, লিভার, কোলন, পাকস্থলী ও গলার ক্যান্সারের ঝুঁকি নিয়মিত রক্তদাতাদের ক্ষেত্রে অনেক কম পরিলক্ষিত হয়েছে।",


    "default": "I didn't understand that. Can you ask me something else?",
    // Add more fixed responses as needed
};





///Other

//chatbot

// Function to send user message and get a response
function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    // Get user input
    const userMessage = userInput.value;

    // Display user message in the chat box
    chatBox.innerHTML += `<div style="text-align:center; border:var(--color) solid; padding:5px; margin:10px; width:45vw; border-radius:20px; float:right; overflow:hidden;" ><strong></strong> ${userMessage}</div>`;

    // Display "Thinking..." before getting the chatbot response
    chatBox.innerHTML += `<div id="thinking-message" style="text-align:center; margin:10px; width:45vw; float:left;">Thinking...</div>`;

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Get chatbot response after a brief delay (simulating "thinking")
    setTimeout(() => {
        // Get chatbot response
        const botResponse = getBotResponse(userMessage);

        // Remove the "Thinking..." message
        const thinkingMessage = document.getElementById("thinking-message");
        if (thinkingMessage) {
            thinkingMessage.remove();
        }

        // Display chatbot response in the chat box
        chatBox.innerHTML += `<div style="border:var(--color) solid; padding:5px; margin:10px; width:45vw; border-radius:20px; float:left;" ><strong></strong> ${botResponse}</div>`;

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000); // Adjust the delay time as needed

    // Clear the user input field
    userInput.value = "";
}

// Function to get a response from the chatbot
function getBotResponse(userMessage) {
    // Convert user message to lowercase for case-insensitive matching
    const lowerCaseMessage = userMessage.toLowerCase();

    // Check if the user message contains an equation
    if (lowerCaseMessage.includes("=")) {
        try {
            // Solve the equation
            const result = solveEquation(userMessage);
            return `সমাধান: ${result}`;
        } catch (error) {
            return "দুঃখিত, সমাধান করা যায়নি।";
        }
    }

    // Check if the user message contains a mathematical expression or trigonometric function
    if (containsNumbers(userMessage)) {
        try {
            // Evaluate the mathematical expression or trigonometric function
            const result = evaluateExpression(userMessage);
            return `গণনা ফলাফল: ${result}`;
        } catch (error) {
            return "দুঃখিত, গণনা করা যায়নি।";
        }
    }

    // Check if the user message matches any fixed responses
    for (const key in fixedResponses) {
        if (lowerCaseMessage.includes(key)) {
            return fixedResponses[key];
        }
    }

    // Check if the user message matches any predefined responses
    for (const key in responses) {
        if (lowerCaseMessage.includes(key)) {
            return responses[key];
        }
    }

    // If no match is found, return the default response
    return responses["default"];
}

// Function to check if the expression contains numbers
function containsNumbers(expression) {
    return /\d/.test(expression);
}

// Function to solve equations
function solveEquation(equation) {
    // Split the equation into left and right sides
    const sides = equation.split("=");
    const leftSide = sides[0].trim();
    const rightSide = sides[1].trim();

    // Move all terms to one side of the equation
    const simplifiedEquation = math.parse(leftSide + ' - (' + rightSide + ')');
    
    // Simplify the equation and solve for x
    const solution = math.simplify(simplifiedEquation, { x: 'x' });
    
    // Return the solution
    return `x = ${solution.toString()}`;
}

// Function to evaluate mathematical expressions or trigonometric functions
function evaluateExpression(expression) {
    if (expression.includes("sin")) {
        const angle = getAngle(expression);
        return Math.sin(angle);
    } else if (expression.includes("cos")) {
        const angle = getAngle(expression);
        return Math.cos(angle);
    } else if (expression.includes("tan")) {
        const angle = getAngle(expression);
        return Math.tan(angle);
    } else {
        return eval(expression);
    }
}

// Function to extract the angle from trigonometric functions
function getAngle(expression) {
    const startIndex = expression.indexOf("(") + 1;
    const endIndex = expression.indexOf(")");
    const angle = expression.substring(startIndex, endIndex);
    return angle;
}



