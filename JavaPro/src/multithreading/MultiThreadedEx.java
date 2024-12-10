package multithreading;

public class MultiThreadedEx {
    public static void main(String[] args) {

            Thread.currentThread().setName("Harsh");
            System.out.println(Thread.currentThread().getName() + " is starting the game!");
            ThreadJalaj tj = new ThreadJalaj();
            ThreadAayush ta = new ThreadAayush();
            tj.start();
            ta.start();

            try {
                tj.join();
                ta.join();
            }catch (InterruptedException e){
                System.out.println(e.getMessage());
            }

        System.out.println(Thread.currentThread().getName() + " is ending ");
    }
}

class Compute1{
    public void odd(){
        for(int i=1;i<=10;i+=2){
            System.out.println("Jalaj: "+i);
        }
    }
    public void even(){
        for(int i=2;i<=10;i+=2){
            System.out.println("Aayush: "+i);
        }
    }
}

class ThreadJalaj extends Thread{
    public void run() {
        Compute1 c1 = new Compute1();
        c1.odd();
    }
}
class ThreadAayush extends Thread{
    public void run(){
        Compute1 c1 = new Compute1();
        c1.even();
    }
}
