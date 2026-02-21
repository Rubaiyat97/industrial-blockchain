console.log("================================================");
console.log("   INDUSTRIAL BLOCKCHAIN MIDDLEWARE STARTED    ");
console.log("================================================");

// ১. ভেরিফিকেশন ফাংশন
function verifySensors(batchId) {
    console.log(`\n[LOG] পণ্যের ব্যাচ আইডি ${batchId}-এর জন্য ডাটা স্ক্যান করা হচ্ছে...`);
    
    setTimeout(() => {
        console.log(`>>> [SENSOR 1]: Temperature check: 24°C - OK ✅`);
    }, 1000);

    setTimeout(() => {
        console.log(`>>> [SENSOR 2]: Quality Control check: Grade A - OK ✅`);
        console.log("------------------------------------------------");
        console.log(`STATUS: Consensus Reached! (Verified by 2 sources)`);
        console.log(`ACTION: Batch ${batchId} ready to anchor on Blockchain.`);
        console.log("------------------------------------------------");
    }, 2500);
}

// ২. ব্যাচ ১০১ রান করা হলো (সফল ডেমো)
verifySensors(101);

// ৩. ব্যাচ ১০২ রান করা হলো (অপেক্ষমান/ফেইল ডেমো)
// এটি ৫ সেকেন্ড পর শুরু হবে যাতে ১০১ এর সাথে মিশে না যায়
setTimeout(() => {
    console.log("\n[LOG] পণ্যের ব্যাচ আইডি 102-এর জন্য ডাটা স্ক্যান করা হচ্ছে...");
    
    setTimeout(() => {
        console.log(">>> [SENSOR 1]: Temperature check: 28°C (High) - WARNING ⚠️");
        console.log(">>> [SENSOR 2]: Quality Control check: Waiting for response... ⏳");
        console.log("------------------------------------------------");
        console.log("STATUS: Consensus Pending! (অপেক্ষমান...)");
        console.log("REASON: Need verification from at least 2 sources.");
        console.log("------------------------------------------------");
    }, 1500);
}, 5000);