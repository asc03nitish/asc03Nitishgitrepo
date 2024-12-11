package Labs;

public class Movie {
    private String moviename;
    private String producer;
    private String director;
    private int duration;
    private int year;
    private String category;

    public Movie(String moviename, String producer){
        if(moviename == null || producer == null || moviename.isEmpty() || producer.isEmpty()){
            throw new IllegalArgumentException("Movie name and producer name is mandate");
        }
        this.moviename = moviename;
        this.producer = producer;
    }


    public Movie(String moviename, String producer, String director, int duration, int year, String category) {
        this(moviename, producer);
        this.director = director;
        this.duration = duration;
        this.year = year;
        this.category = category;
    }
    public void displayMovieInfo(){
        System.out.println("MovieName: "+moviename);
        System.out.println("Producer: "+producer);
        System.out.println("Directed By: " + (director != null ? director : "Not specified"));
        System.out.println("Duration: " + (duration > 0 ? duration + " minutes" : "Not specified"));
        System.out.println("Year: " + (year > 0 ? year : "Not specified"));
        System.out.println("Category: " + (category != null ? category : "Not specified"));
    }
    public String getMovieName() {
        return moviename;
    }

    public String getProducedBy() {
        return producer;
    }

    public void setDirectedBy(String director) {
        this.director = director;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }
    public void setYear(int year) {
        this.year = year;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    // Main method to test the class
    public static void main(String[] args) {
        Movie movie1 = new Movie("Inception", "Emma Thomas");
        movie1.displayMovieInfo();

        System.out.println();

        Movie movie2 = new Movie("The Dark Knight", "Emma Thomas", "Christopher Nolan", 152, 2008, "Action");
        movie2.displayMovieInfo();

    }
}

