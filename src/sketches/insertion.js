const InsertionSketch = (p) => {
    let heights = [];
    let bar_width = 0;

    p.setup = () => {
        p.createCanvas(p.windowWidth * 0.75, p.windowHeight * 0.75);
        bar_width = (p.windowWidth * 0.75) / 50;

        for (let i = 0; i < 50; i++) {
            heights.push(p.random(p.windowHeight * 0.75));
        }

        console.log(heights);
        p.insertionSort(heights);
    };

    p.draw = () => {
        p.background("#2c3e50");

        p.fill("#3498db");
        for (let i = 0; i < heights.length; i++) {
            p.rect(
                i * bar_width,
                p.windowHeight * 0.75 - heights[i],
                bar_width,
                heights[i]
            );
        }
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth * 0.75, p.windowHeight * 0.75);
        bar_width = (p.windowWidth * 0.75) / 50;
    };

    p.insertionSort = async (arr) => {
        for (let i = 1; i < arr.length; i++) {
            let j = i - 1;
            let current = arr[i];

            while (j >= 0 && arr[j] > current) {
                await p.sleep(50);
                arr[j + 1] = arr[j];
                j--;
            }

            await p.sleep(50);
            arr[j + 1] = current;
        }
    };

    p.sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };
};

export default InsertionSketch;
