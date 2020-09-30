const QuickSortSketch = (p) => {
    let heights = [];
    let bar_width = 0;

    p.setup = () => {
        p.createCanvas(p.windowWidth * 0.75, p.windowHeight * 0.75);
        bar_width = (p.windowWidth * 0.75) / 25;

        for (let i = 0; i < 25; i++) {
            heights.push(p.random(p.windowHeight * 0.75));
        }

        console.log(heights);
        p.quickSort(heights, 0, heights.length - 1);
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

    //quck sort algorithm
    p.quickSort = async (arr, low, high) => {
        if (low <= high) {
            let pivot = await p.partition(arr, low, high);
            Promise.all([
                p.quickSort(arr, low, pivot - 1),
                p.quickSort(arr, pivot + 1, high),
            ]);

            // await quickSort(arr, low, pivot - 1);
            // await quickSort(arr, pivot + 1, high);
        }
    };

    p.partition = async (arr, low, high) => {
        let insertion_index = low;

        for (let i = low; i <= high - 1; i++) {
            if (arr[i] < arr[high]) {
                await p.swap(arr, insertion_index, i);
                insertion_index++;
            }
        }

        await p.swap(arr, insertion_index, high);

        return insertion_index;
    };

    p.swap = async (arr, i, j) => {
        await p.sleep(75);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };

    p.sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };
};

export default QuickSortSketch;
