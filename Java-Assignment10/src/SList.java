import java.util.NoSuchElementException;
public class SList<T> {
    private Node<T> head = new Node<>(null);
    public SListIterator<T> iterator() {
        return new SListIterator<>(head);
    }

    private static class Node<T> {
        T data;
        Node<T> next;

        Node(T data) {
            this.data = data;
        }

        Node(T data, Node<T> next) {
            this.data = data;
            this.next = next;
        }
    }

    public static class SListIterator<T> {
        private Node<T> current;

        SListIterator(Node<T> head) {
            current = head;
        }

        public boolean hasNext() {
            return current.next != null;
        }

        public T next() {
            current = current.next;
            return current.data;
        }

        public void insert(T data) {
            current.next = new Node<>(data, current.next);
            current = current.next;
        }

        public void remove() {
            current.next = current.next.next;
        }
    }
    public static void main(String[] args) {
        SList<Integer> strList=new SList<>();

        SListIterator<Integer> itr=strList.iterator();

        itr.insert(1);
        itr.insert(2);
        itr.insert(3);
        itr.insert(4);
        itr.insert(5);
        itr.insert(6);
        itr = strList.iterator();

        while (itr.hasNext()){
            System.out.print(itr.next() + "->");
        }
        System.out.print("null");
    }
}

