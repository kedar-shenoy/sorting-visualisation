const MergeSortSketch = (p) => {
    let heights = [];
    let bar_width = 0;

    p.setup = () => {
        p.createCanvas(p.windowWidth * 0.75, p.windowHeight * 0.75);
        bar_width = (p.windowWidth * 0.75) / 25;

        for (let i = 0; i < 25; i++) {
            heights.push(p.random(p.windowHeight * 0.75));
        }

        console.log(heights);
        p.mergeSort(heights, 0, heights.length - 1);
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

    //merge sort algorithm
    p.mergeSort = async (arr, start, end) => {
        if (start >= end) return;
        let mid = Math.floor((start + end) / 2);
        // Promise.all([
        //     p.mergeSort(arr, start, mid),
        //     p.mergeSort(arr, mid + 1, end),
        // ]);
        await p.mergeSort(arr, start, mid);
        await p.mergeSort(arr, mid + 1, end);
        await p.merge(arr, start, mid, end);
    };

    // function to merge
    p.merge = async (arr, start, mid, end) => {
        let temp = [];

        let k = start,
            l = mid + 1;

        while (k <= mid && l <= end) {
            if (arr[k] < arr[l]) {
                temp.push(arr[k]);
                k++;
            } else {
                temp.push(arr[l]);
                l++;
            }
        }

        while (k <= mid) {
            temp.push(arr[k]);
            k++;
        }

        while (l <= end) {
            temp.push(arr[l]);
            l++;
        }

        for (let i = 0, k = start; i < temp.length, k <= end; i++, k++) {
            arr[k] = temp[i];
            await p.sleep(75);
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

export default MergeSortSketch;
