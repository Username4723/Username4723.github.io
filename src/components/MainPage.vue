<template>
  <div style="padding: 3%">
    <b-card bg-variant="transparent" text-variant="light" border-variant="dark">
      <b-card-title>Nathan Nguyen</b-card-title>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/">Home</b-navbar-brand>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown text="About Me">
              <b-dropdown-item to="/about/skills">Skills & Talents</b-dropdown-item>
              <b-dropdown-item to="/about/competitions">Past Competitions</b-dropdown-item>
              <b-dropdown-item to="/about/experience">Experience & Education</b-dropdown-item>
              <b-dropdown-item to="/about/contact">Contact Me</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Projects">
              <b-dropdown-item to="/projects/dnd">Dungeons & Dragons</b-dropdown-item>
              <b-dropdown-item to="/projects/servers">Minecraft Server</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-card>
    <br/>
    <b-card bg-variant="transparent" text-variant="light" border-variant="dark">
      <router-view></router-view>
    </b-card>
  </div>
</template>

<script>

export default {
  name: 'MainPage'
}
</script>

<style scoped>

.card-body {
  background-color: rgb(0, 0, 0, 0.6);
}
</style>
