const HeapSortSketch = (p) => {
    let heights = [];
    let bar_width = 0;

    p.setup = () => {
        p.createCanvas(p.windowWidth * 0.75, p.windowHeight * 0.75);
        bar_width = (p.windowWidth * 0.75) / 50;

        for (let i = 0; i < 50; i++) {
            heights.push(p.random(p.windowHeight * 0.75));
        }

        console.log(heights);
        p.heapSort(heights);
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

    //heapify
    p.heapify = async (arr, size, index) => {
        let max_index = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;

        if (left < size && arr[left] > arr[max_index]) max_index = left;

        if (right < size && arr[right] > arr[max_index]) max_index = right;

        if (max_index != index) {
            await p.swap(arr, index, max_index);
            await p.heapify(arr, size, max_index);
        }
    };

    p.heapSort = async (arr) => {
        let size = arr.length;

        for (let i = Math.floor(size / 2); i >= 0; i--) {
            await p.heapify(arr, size, i);
        }

        while (size > 1) {
            await p.swap(arr, 0, size - 1);
            size--;
            await p.heapify(arr, size, 0);
        }
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

export default HeapSortSketch;
