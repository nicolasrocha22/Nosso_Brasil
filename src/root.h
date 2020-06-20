#ifndef ROOT_H
#define ROOT_H

void isRoot() {
    if(geteuid()) {
        printf("[ERROR]::É necessário está como root para usar a aplicação!\n");
        sleep(3);
        system("clear");
        exit(1);
    }
}

#endif