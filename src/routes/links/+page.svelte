<script>
  export let data;

  function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${parseInt(month)}.${parseInt(day)}.${year.slice(2)}`;
  }

  // Group the data by date
  let groupedData = [];
  $: {
    if (data && data.data) {
      groupedData = data.data.reduce((groups, item) => {
        const group = groups.find((g) => g.date === item.date);
        if (group) {
          group.links.push(item);
        } else {
          groups.push({ date: item.date, links: [item] });
        }
        return groups;
      }, []);
    }
  }
</script>

<div class="content-container">
  <h1>links</h1>
  {#each groupedData as group}
  <div class="group">
    <h2>{formatDate(group.date)}</h2>
    {#each group.links as link}
      <div class="link">
        <p><a href={link.link}>{link.title}</a> - {@html link.description}</p>
      </div>
    {/each}
  </div>
{/each}
</div>

<style>
  .content-container {
    width: 80%; /* adjust this as needed */
    max-width: 500px; /* adjust this as needed */
    margin: auto; 
}


@media (max-width: 600px) {
    .content-container {
        width: 90%; /* adjust this as needed for smaller screens */
    }
}

</style>