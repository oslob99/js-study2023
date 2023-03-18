import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Random;


public class Rusian {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        Random perRd = new Random();

        System.out.print("게임 인원 (2 ~ 4명) ==> ");
        int per = Integer.parseInt(br.readLine());

        String [] people = new String[per];

        System.out.println("플레이어 이름을 등록합니다.");
        for(int i = 0; i<people.length; i++){
            System.out.print((i+1)+"번 플레이어 이름 : ");
            people[i] = br.readLine();
        }// 각 플레이어 이름을 배열에 저장
        for(String perName : people){
            System.out.print("["+perName+"] 참가!");
        }// 플레이어 이름 출력

        // 플레이어 입장 끝

        // 실탄 장전 시작

        System.out.print("\n실탄 개수 (1 ~ 5개) ==> ");

        int bullet = Integer.parseInt(br.readLine());
        int [] bullets = {0, 0, 0, 0, 0};
        int bulletEnd = 0;


        int playerRd = perRd.nextInt(people.length) + 1;
        int nextPlayernum = playerRd-1;
        String nextPlayer = "";

        System.out.println("\n총을 받았습니다. "+people[nextPlayernum]+"부터 시작합니다.");

        while (true){
            bulletEnd = 0;
            nextPlayer = people[nextPlayernum];
            System.out.println("\n["+nextPlayer+"의 턴!] 탄창을 회전합니다.\n# 엔터를 누르면 격발합니다.");
            br.readLine();

            while (true){
                int bulletRd = perRd.nextInt(5) + 1;
                if(bullets[bulletRd-1] == 1) {continue;}
                else {bullets[bulletRd-1] = 1;}
                bulletEnd++;
                if(bulletEnd == bullet){break;}
            }// 5개의 탄창 안에 랜덤한 위치에 입력한 탄알 갯수를 탄창에 저장

            if(bullets[0] ==1){
            System.out.println("# 뱅뱅뱅!! ["+nextPlayer+"]님 잘자요~\n");
            people[nextPlayernum]= "";
            bullet--; nextPlayernum++;
            }// 탄창 0번에 총알이 있어서 해당 플레이어 사망
            else {
                System.out.println("이걸 살아? 까비용!\n");
                nextPlayernum++;
            }
            if(nextPlayernum == people.length){
                nextPlayernum = 0;
            }
            if(bullet == 0){
                System.out.println("게임끝!!");
                for(String perName : people){
                    System.out.print("["+perName+"] 생존!");
                }// 생존 플레이어 출력
                break;
            }

        }// 진짜 러시안룰렛 게임 반복!

    }
}

