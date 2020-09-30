const BubbleSortSketch = (p) => {
    let heights = [];
    let bar_width = 0;

    p.setup = () => {
        p.createCanvas(p.windowWidth * 0.75, p.windowHeight * 0.75);
        bar_width = (p.windowWidth * 0.75) / 25;

        for (let i = 0; i < 25; i++) {
            heights.push(p.random(p.windowHeight * 0.75));
        }

        console.log(heights);
        p.bubbleSort(heights);
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
        bar_width = (p.windowWidth * 0.75) / 25;
    };

    p.bubbleSort = async (arr) => {
        // for (let i = 1; i < arr.length; i++) {
        //     let j = i - 1;
        //     let current = arr[i];

        //     while (j >= 0 && arr[j] > current) {
        //         await p.sleep(40);
        //         arr[j + 1] = arr[j];
        //         j--;
        //     }

        //     await p.sleep(40);
        //     arr[j + 1] = current;
        // }

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    await p.swap(arr, j, j + 1);
                }
            }
        }
    };

    p.swap = async (arr, i, j) => {
        await p.sleep(70);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };

    p.sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };
};

export default BubbleSortSketch;
