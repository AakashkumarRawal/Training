int main() {
    int n, i, j;
    printf("Enter number of rows : ");
    scanf("%d", & n);
    for (i = 1; i <= n; i++) {
        for (j = i; j <= n; j++) {
            printf(" ");
        }
        for (j = 1; j <= i; j++) {
            printf("%d", j);
        }
        for (j = i - 1; j >= 1; j--) {
            printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}