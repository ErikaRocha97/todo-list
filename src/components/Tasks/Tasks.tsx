import styles from "./styles.module.scss";

export const Tasks: React.FC = () => {
  return (
    <section className={styles.container}>
      <form>
        <div>
          <label htmlFor="task-title">Adicionar tarefa</label>
          <input type="text" id="task-title" placeholder="Título da tarefa" />
        </div>

        <button>Adicionar tarefa</button>
      </form>
    </section>
  );
};
