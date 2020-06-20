#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <unistd.h>

#include "about.h"
#include "root.h"
#include "debian.h"
#include "camera.h"

int main(int argc, char *argv[]) {
    char option;

    while(true) {
        system("clear");
        printf("Nosso Pará\n");
        printf("---------------------\n\n");
        isDebian();
        isRoot();

        printf("Escolha uma das opções abaixo:\n\n");
        printf("- Digite 1 para iniciar a câmera;\n");
        printf("- Digite 2 para ver sobre a aplicação;\n");
        printf("- Digite 3 para sair;\n\n");
        printf("> ");
        option = getchar();
        while((getchar()) != '\n');

        if(option == 49) {
            cameraAction();
        } else if(option == 50) {
            showAbout();
        } else if(option == 51) {
            system("clear");
            exit(1);
        } else {
            printf("\n\n[ERROR]::Comando Inválido!");
            sleep(3);
        }
    }
    return 0;
}