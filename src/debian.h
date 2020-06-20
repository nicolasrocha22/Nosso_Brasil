#ifndef DEBIAN_H
#define DEBIAN_H

void isDebian() {
    if(access("/etc/debian_version", F_OK) != 0) {
        printf("[ERROR]::Essa aplicação só funciona no Debian ou sistemas baseados no mesmo!");
        sleep(3);
        system("clear");
        exit(1);
    }
}

#endif