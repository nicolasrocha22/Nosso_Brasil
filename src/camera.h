#ifndef CAMERA_H
#define CAMERA_H

void cameraAction() {
    char option;
    char *ip;
    char command[100];
    int motion;
    int chromium;

    motion = system("motion -h >/dev/null 2>&1");
    chromium = system("chromium -h >/dev/null 2>&1");

    if(motion == 0) {
        printf("\n\n[ERROR]::É necessário ter o motion instalado!");
        sleep(3);
    } else {
        system("service motion start");
        while(true) {
            system("clear");
            printf("Câmera\n");
            printf("---------------------\n\n");

            printf("Escolha uma das opções abaixo:\n\n");
            printf("- Digite 1 para abrir a câmera;\n");
            printf("- Digite 2 para desligar a câmera;\n\n");
            printf("> ");
            option = getchar();
            while((getchar()) != '\n');

            if(option == 49) {
                ip = (char *) malloc(17 * sizeof(char));
                printf("\n\nDigite o ip da câmera: ");
                fgets(ip, 17, stdin);
                if(chromium == 0) {
                    strcpy(command, "chromium --no-sandbox ");
                    strcat(command, ip);
                    system(command);
                } else {
                    printf("\n\n[ERROR]::Para abrir a câmera é necessário ter o chromium!");
                    sleep(3);
                }
                while((getchar()) != '\n');
            } else if(option == 50) {
                system("service motion stop");
                break;
            } else {
                printf("\n\n[ERROR]::Comando Inválido!");
                sleep(3);
            }
        }
    }
}

#endif