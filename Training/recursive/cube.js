function cube(i, n) {
    if (i <= n) {
        cubes = i * i * i;
        console.log(cubes);
        i += 1;
        cube(i, n);
    }

}

cube(1, 10);