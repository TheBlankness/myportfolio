<div class="scrolling_text rotate-[-33.31deg]">
	<div class="text">
		<span>Ahmad</span>
		<span>Hazim</span>
		<span>Imanuddin</span>
	</div>
	<div class="text">
		<span>Ahmad</span>
		<span>Hazim</span>
		<span>Imanuddin</span>
	</div>
</div>

<style>
	.scrolling_text {
		width: 100%;
		overflow: hidden;
		display: flex;
		white-space: nowrap;
	}
	.text {
		font-size: 80px;
		font-weight: 700;
		text-transform: uppercase;
		color: #c2c2c2;
		animation: animate_text 3s linear infinite; /* The animation property */
	}
	.text span {
		margin: 0;
	}
	@keyframes animate_text {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(-100%, 0, 0);
		}
	}
</style>
