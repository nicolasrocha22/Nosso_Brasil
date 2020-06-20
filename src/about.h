#ifndef ABOUT_H
#define ABOUT_H

void showAbout() {
    char option;
    float version;

    version = 0.1;

    system("clear");
    printf("Sobre\n");
    printf("---------------------\n\n");

    printf("Nosso Pará\n");
    printf("Versão: %1.1f", version);
    printf("\n\nEquipe:\n");
    printf("  Mateus Alberio\n");
    printf("  Nícolas Rocha\n");
    printf("  Paula Martins\n");
    printf("\nOrientador: Marcos Paulo");

    printf("\n\n\nPresione ENTER para voltar ao menu");
    option = getchar();
    if(option == 0x0A) {
        return;
    }
}

#endif