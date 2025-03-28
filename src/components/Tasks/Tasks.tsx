import { FormEvent, useState } from "react";
import styles from "./styles.module.scss";

// * Interface da tarefa que vai ser colocada no array.

interface Task {
  title: string;
  done: boolean;
  id: number;
}

export const Tasks: React.FC = () => {
  // * CRIAR MEU PRIMEIRO ESTADO (retorna um array)
  // useState() -> hook que cria o estado.
  // atribuir estado taskTitle ao value do input.
  const [taskTitle, setTaskTitle] = useState("");

  //*  NOVO ESTADO (um array) para a função de adicionar tarefa
  // quando o estado muda, ele altera a aplicação
  // no array: nome da tarefa, status (concluída ou não)
  // cada posição no array é um objeto (tarefa) com título e done.

  // [
  //   {title: "Tarefa 1", done: boolean, id: number }
  // ]

  // fazer tipagem do array: passar como tipo a interface Type.

  const [tasks, setTasks] = useState([] as Task[]);

  // Criar função fora do return() para lidar com a ação de adicionar tarefa.
  // o typescript exige que seja atribuido um tipo para o event.
  // vou tirar a função de dentro do form e passar como parametro do onSubmit.
  // onSubmit só passa 1 paramêtro: event.

  // Disparar função: adicionar tarefa na lista
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length <= 3) {
      // mandar alerta
      alert("Não é possível adicionar uma tarefa com menos de 3 letras.");
      return;
    }

    // ! Adicionar tarefa na lista e salvar no array sem usar .push

    setTasks([
      ...tasks,
      // pegar o que está no array tasks e adicionar no array novo.
      // nova tarefa (ctrl+espaço)
      // adicionar ID de forma dinâmica:
      // new Date().getTime() -> retorna data e horário exato. Não se repete.
      { id: new Date().getTime(), title: taskTitle, done: false },
    ]);
    // Limpar o input após adicionar tarefa
    setTaskTitle("");

    // ? Como exibir o estado Tasks no HTML
    // Fazer um for renderizando cada tarefa.
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar tarefa</label>
          <input
            value={taskTitle}
            // Para alterar o estado preciso utilizar um EVENTO: onChange
            onChange={(event) => setTaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Título da tarefa"
          />
        </div>

        {/* ao pressionar o botão ou pressionar enter, quero pegar o conteúdo do input */}
        {/* ação padrão do submit é recarregar a página */}
        {/* para tirar o comportamento padrão, preciso alterar o onSubmit do form com preventDefault() */}
        <button type="submit">Adicionar tarefa</button>
      </form>
      {/* Lista de tarefas */}
      <ul>
        {/* Pegar array dentro do html */}
        {/* Renderização multipla (de array): usa map() para retornar HTML */}
        {/* para cada tarefa do array, retornar uma <li> */}
        {tasks.map((task) => {
          // No map, precisa passar um parametro ÚNICO "key" no primeiro elemento.
          return (
            <li key={task.id}>
              <input type="checkbox" name="" id={`task-${task.id}`} />
              <label htmlFor={`task-${task.id}`}>{task.title}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
