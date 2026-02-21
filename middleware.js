console.log("================================================");
console.log("   INDUSTRIAL BLOCKCHAIN MIDDLEWARE STARTED    ");
console.log("================================================");

function verifySensors(batchId) {
    console.log(`\n[LOG] পণ্যের ব্যাচ আইডি ${batchId}-এর জন্য ডাটা স্ক্যান করা হচ্ছে...`);
    setTimeout(() => {
        console.log(">>> [SENSOR 1]: Temperature check: 24°C - OK ✅");
    }, 1500);
    setTimeout(() => {
        console.log(">>> [SENSOR 2]: Quality Control check: Grade A - OK ✅");
        console.log("------------------------------------------------");
        console.log("STATUS: Consensus Reached! (Verified by 2 sources)");
        console.log(`ACTION: Batch ${batchId} ready to anchor on Blockchain.`);
        console.log("------------------------------------------------");
    }, 3000);
}

verifySensors(101);