package multithreading;

public class SingleThreadedExample {
        public static void main(String[] args) {
            System.out.println(Thread.currentThread().getName());
            Thread.currentThread().setName("Main Thread");
            System.out.println(Thread.currentThread().getName());
            Compute compute = new Compute();
            compute.odd();
            compute.even();
        }
    }
    class Compute {
        public void odd() {
            for(int i = 1; i<= 10; i+=2) {
                System.out.println("ODD : " + i);
            }
        }
        public void even() {
            for(int i = 2; i<= 10; i+=2) {
                System.out.println("EVEN : " + i);
            }
        }
    }
